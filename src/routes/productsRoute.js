const express = require('express');

const { getAllproductsController, registerProductController } = require('../controller');
const { jwtValidateMiddleware } = require('../middlewares');

const productsRoute = express.Router();

productsRoute.get('/', jwtValidateMiddleware, getAllproductsController);
productsRoute.post('/', jwtValidateMiddleware, registerProductController);

module.exports = productsRoute;
