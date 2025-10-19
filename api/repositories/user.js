const { Sequelize } = require('sequelize');
const User = require('../models/user');

async function createUser(sequelize, newUser) {
  const user = await User(sequelize, Sequelize.DataTypes).create({
    name: newUser.name,
    phone: newUser.phone,
    email: newUser.email,
    password: newUser.password,
  });

  return user;
}

module.exports = {
  createUser,
};
