const sequelizeHelper = require('../../helpers/sequelize');
const userService = require('../services/user');

async function getUser(req, res) {
  const sequelize = await sequelizeHelper.getConnection();
  const userInfo = req.user;

  const user = await userService.getUser(sequelize, userInfo);

  res.status(200).send({
    message: 'Veja as informações sobre o seu usuário',
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
}

async function deleteUser(req, res) {
  const sequelize = await sequelizeHelper.getConnection();

  await userService.deleteUser(sequelize, req.user.id);

  res.status(200).send({
    message: 'O usuário foi deletado com sucesso!',
  });
}

async function editUser(req, res) {
  const sequelize = await sequelizeHelper.getConnection();

  const newInfoUser = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  await userService.editUser(sequelize, req.user.id, newInfoUser);

  res.status(200).send({
    message: 'Usuário editado com sucesso!',
    newData: newInfoUser,
  });
}

module.exports = {
  getUser,
  deleteUser,
  editUser,
};
