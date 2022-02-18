require('dotenv').config();

const express = require('express');
const handleError = require('./middlewares/handleError');
const { loginUserRoute } = require('./routes');

const app = express();

app.use(express.json());

const { PORT } = process.env;

app.use('/', loginUserRoute);

app.use(handleError);

app.listen(PORT, () => console.log(`Escutando na porta: ${PORT}!`));
