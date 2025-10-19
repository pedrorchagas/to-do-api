const { Sequelize } = require('sequelize');
const User = require('../models/user');
const errorHelper = require('../../helpers/errors');

function getFiltro(info) {
  const filtro = { where: {} };

  if (info.name) {
    if (filtro.where[Sequelize.Op.or]) {
      filtro.where[Sequelize.Op.or].push({ email: info.name });
    } else {
      filtro.where[Sequelize.Op.or] = [
        { email: info.name },
      ];
    }
  }
  if (info.email) {
    if (filtro.where[Sequelize.Op.or]) {
      filtro.where[Sequelize.Op.or].push({ email: info.email });
    } else {
      filtro.where[Sequelize.Op.or] = [
        { email: info.email },
      ];
    }
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

async function deleteUser(sequelize, userId) {
  await User(sequelize, Sequelize.DataTypes).destroy({
    where: {
      id: userId,
    },
  });
}

async function editUser(sequelize, userId, newUserInfo) {
  const user = await User(sequelize, Sequelize.DataTypes).update(
    newUserInfo,
    {
      where: {
        id: userId,
      },
    },
  );

  return user;
}

module.exports = {
  getUser,
  deleteUser,
  editUser,
};
