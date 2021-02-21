const express = require('express');
const app = express();

app.use(express.json());

// Import all the routes
const products = require('./routes/product');
const home = require('./routes/home');

app.use('/api/v1', products)
app.use('/api/v1', home)
module.exports = app