const express = require('express');

const helloWorld = express.Router();

helloWorld.get('/helloworld', (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = helloWorld;
