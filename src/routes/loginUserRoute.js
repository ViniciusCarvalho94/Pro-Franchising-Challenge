const express = require('express');

const { loginUserController } = require('../controller');

const loginUserRoute = express.Router();

loginUserRoute.post('/', loginUserController);

module.exports = loginUserRoute;
