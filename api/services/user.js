const { Sequelize } = require('sequelize');
const User = require('../models/user');
const errorHelper = require('../../helpers/errors');

function getFiltro(info) {
  const filtro = {
    where: {
      active: true,
    },
  };

  if (info.name || info.email) {
    filtro.where[Sequelize.Op.or] = [
      { name: info.name },
      { email: info.email },
    ];
  }

  if (info.password) {
    filtro.where.password = info.password;
  }

  if (info.id) {
    filtro.where[Sequelize.Op.or].push({ id: info.id });
  }

  return filtro;
}

async function getUser(sequelize, userInfo) {
  try {
    const user = await User(sequelize, Sequelize.DataTypes).findOne(
      getFiltro(userInfo),
    );

    return user.dataValues;
  } catch (error) {
    throw errorHelper.userNotFound;
  }
}

async function deleteUser(sequelize, userInfo) {
  await User(sequelize, Sequelize.DataTypes).update(
    {
      active: false,
    },
    getFiltro(userInfo),
  );
}

async function editUser(sequelize, userInfo, newUserInfo) {
  const user = await User(sequelize, Sequelize.DataTypes).update(
    newUserInfo,
    getFiltro(userInfo),
  );

  return user;
}

module.exports = {
  getUser,
  deleteUser,
  editUser,
};
