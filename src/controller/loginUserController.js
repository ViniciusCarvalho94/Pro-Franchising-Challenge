const { loginUserService } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const userLogin = req.body;

    const token = await loginUserService(userLogin);

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};
