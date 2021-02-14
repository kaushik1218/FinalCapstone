const express = require('express')
const { response } = require('../app')
const router = express.Router();

const { getProducts } = require('../controllers/productController')

router.route('/products').get(getProducts);
module.exports = router;