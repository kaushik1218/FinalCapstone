const express = require('express');
const app = express();
const errorMiddleware =require('./middlewares/errors');

const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser())

const products = require('./routes/product');
const home = require('./routes/home');

const auth = require('./routes/auth');
const order = require('./routes/order');

// Import all the routes

app.use('/api/v1', products)
app.use('/api/v1', home)
app.use('/api/v1', auth)
app.use('/api/v1', order)
//middleware to handle errors

app.use(errorMiddleware);
module.exports = app