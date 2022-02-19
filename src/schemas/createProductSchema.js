const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': '"name" tem que ser uma string',
    'string.empty': '"name" não pode ser vazio',
    'string.min': '"name" tem que ter no mínimo 3 caracteres',
    'any.required': 'tem que ter o atributo "name"',
  }),
  price: Joi.string().regex(/^\d+[,]\d+$/).required().messages({
    'string.base': '"price" tem que ser uma string',
    'string.empty': '"price" não pode ser vazio',
    'string.pattern.base': '"price" tem que estar no formato (0,00)',
    'any.required': 'tem que ter o atributo "price"',
  }),
  ingredients: Joi.array().min(1).required().messages({
    'array.base': '"ingredients" tem que ser um array',
    'array.empty': '"ingredients" não pode ser vazio',
    'array.min': '"ingredients" tem que ter no mínimo 1 ingrediente',
    'any.required': 'tem que ter o atributo "ingredients"',
  }),
});
