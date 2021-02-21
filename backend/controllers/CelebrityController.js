const Home = require('../models/home')

// Create new Celebrity => /api/v1/admin/celebrity/new
exports.newCelebrity = async(req, res, next) => {
    const home = await Home.create(req.body);

    res.status(201).json({
        success: true,
        home
    })
}

// Get all Celebrities => /api/v1/celebrity

exports.getCelebrity = async (req, res, next) => {
    const home = await Home.find();
    res.status(200).json({
        success: true,
        count: home.length,
        home
    })
}

// Get Single Celebrity details => /api/v1/celebrity/:id

exports.getSingleCelebrity = async (req, res, next) => {
    const home = await Home.findById(req.params.id);

    if(!home) {
        return res.status(404).json({
            success: false,
            message: 'Celebrity not found'
        })
    }

    res.status(200).json({
        success: true,
        home
    })
}

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