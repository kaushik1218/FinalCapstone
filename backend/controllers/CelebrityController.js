const Home = require('../models/home')
const Product = require('../models/product');
const errorHandler=require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

// Create new Celebrity => /api/v1/admin/celebrity/new
exports.newCelebrity = catchAsyncErrors (async(req, res, next) => {
    req.body.user = req.user.id;
    const home = await Home.create(req.body);

    res.status(201).json({
        success: true,
        home
    })
})

// Get all Celebrities => /api/v1/celebrity?keyword=kohli

exports.getCelebrity = catchAsyncErrors ( async (req, res, next) => {
    
    
    const celebrityCount = await Home.countDocuments();
    const apiFeatures = new APIFeatures(Home.find(), req.query)
                           .search()
                           .filter()
    const home = await apiFeatures.query;

        res.status(200).json({
            success: true,
            celebrityCount,
            home
        })
  

})

// Get Single Celebrity details => /api/v1/celebrity?keyword=kohli

exports.getSingleCelebrity = catchAsyncErrors ( async (req, res, next) => {
    const home = await Home.findById(req.params.id);

    const pro = await Product.find({celebid:req.params.celebid})
    if(!pro) {
        return next(new errorHandler('Celebrity not found',404));
    }
    res.status(200).json({
        success: true,
        pro
    })
})

//update Celebrity => /api/v1/admin/celebrity/:id
exports.updateCelebrity = async (req, res, next) => {
    let home = await Home.findById(req.params.id); 

    if(!home) {
        return res.status(404).json({
            success: false,
            message: 'Celebrity not found'
        })
    }
    
    home = await Home.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        userFindAndModify: false
    });

    res.status(200).json({
        success: true,
        home
    })
    
}

// Delete Celebrity => /api/v1/admin/celebrity/:id

exports.deleteCelebrity = async (req, res, next) => {

    const home = await Home.findById(req.params.id);

    if(!home) {
        return res.status(404).json({
            success: false,
            message: 'Celebrity not found'
        })
    }

    await home.remove();

    res.status(200).json({
        success: true,
        message: 'Celebrity is deleted.'
    })
}