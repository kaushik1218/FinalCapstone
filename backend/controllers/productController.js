
const APIFeatures = require('../utils/apiFeatures');


//Create new product => /api/v1/admin/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {    
     
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})
//Get all product
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const resPerPage = 4;

    const productCount = await Product.countDocuments();// will count all the products on frontend

    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resPerPage)
    
    const product = await apifeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        products
    })
})