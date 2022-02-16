const express = require('express');
const handleError = require('./middlewares/handleError');
const { helloWorld } = require('./routes');

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/', helloWorld);

app.use(handleError);

app.listen(PORT, () => console.log(`Escutando na porta: ${PORT}!`));
