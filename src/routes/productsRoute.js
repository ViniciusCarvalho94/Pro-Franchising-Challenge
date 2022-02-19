const express = require('express');

const { getAllproductsController } = require('../controller');
const { jwtValidateMiddleware } = require('../middlewares');

const productsRoute = express.Router();

productsRoute.get('/', jwtValidateMiddleware, getAllproductsController);

module.exports = productsRoute;
