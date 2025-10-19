const sequelizeHelper = require('../../helpers/sequelize');
const errorHelper = require('../../helpers/errors');
const userRepository = require('../repositories/user');

async function create(req, res) {
  const sequelize = await sequelizeHelper.getConnection();

  try {
    const newUser = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await userRepository.createUser(sequelize, newUser);
    res.status(200).send({ message: 'Usuário criado com sucesso!', userId: user.id });
  } catch (error) {
    throw errorHelper.cantCreateUser;
  }
}

module.exports = {
  create,
};
