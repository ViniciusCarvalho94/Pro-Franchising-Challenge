const { objError } = require('../functions');
const { registerProductModel, findOneProductModel } = require('../models');
const { createProductSchema } = require('../schemas');

function verifyPermission(rule) {
  if (rule !== 'admin') throw objError(401, 'Usuário não autorizado');
}

async function verifyProductAlreadyExists(name) {
  const product = await findOneProductModel(name);
  if (product) throw objError(400, 'Produto já existente');
}

function validateSchema({ name, price, ingredients }) {
  const { error } = createProductSchema.validate({ name, price, ingredients });
  if (error) throw objError(400, error.message);
  if (price === '0,00') throw objError(400, '"price" tem que ser maior que 0,01');
}

module.exports = async (rule, product) => {
  verifyPermission(rule);
  validateSchema(product);

  const { name } = product;
  await verifyProductAlreadyExists(name);

  await registerProductModel(product);
};
