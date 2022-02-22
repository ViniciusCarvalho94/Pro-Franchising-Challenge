const express = require('express');

const { getAllproductsController, registerProductController, uploadProductImageController } = require('../controller');
const { jwtValidateMiddleware, uploadImageMiddleware } = require('../middlewares');

const productsRoute = express.Router();

productsRoute.get('/', jwtValidateMiddleware, getAllproductsController);
productsRoute.post('/', jwtValidateMiddleware, registerProductController);

productsRoute.post('/upload', jwtValidateMiddleware, uploadImageMiddleware.single('image'), uploadProductImageController);

module.exports = productsRoute;
