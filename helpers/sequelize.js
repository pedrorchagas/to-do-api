const { Sequelize } = require('sequelize');
const { ERRORS } = require('./errors');

async function getConnection() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
  });

  try {
    await sequelize.authenticate();
    return sequelize;
  } catch (error) {
    console.log('INICIAÇÃO DO SEQUELIZE: ', error);
    throw ERRORS.cantConnectToDatabase;
  }
}

module.exports = {
  getConnection,
};
