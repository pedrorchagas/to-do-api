const sequelizeHelper = require('../../helpers/sequelize');
const loginService = require('../services/login');
const errorHelper = require('../../helpers/errors');
const userService = require('../services/user');

async function login(req, res) {
  const sequelize = await sequelizeHelper.getConnection();
  const userInfo = {};

  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith('Basic')) {
      const base64Part = authHeader.substring('Basic '.length);
      const decodedCredentials = Buffer.from(base64Part, 'base64').toString('utf8');
      const [basicUser, basicPass] = decodedCredentials.split(':');

      userInfo.name = basicUser;
      userInfo.password = basicPass;
      userInfo.email = basicUser;
    }
  } else if (req.body) {
    userInfo.name = req.body.name;
    userInfo.email = req.body.email;
    userInfo.password = req.body.password;
  }

  if (!(userInfo.name || userInfo.email) || !userInfo.password) {
    throw errorHelper.credentialsNotFound;
  }

  const user = await userService.getUser(sequelize, userInfo);

  if (user) {
    const token = await loginService.generateToken(user);
    res.status(200).send({
      message: 'Login feito com sucesso!',
      token,
    });
  } else {
    throw errorHelper.userNotFound;
  }
}

module.exports = {
  login,
};
