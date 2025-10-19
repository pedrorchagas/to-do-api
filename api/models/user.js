const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, nomeTable = 'users') => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: true,
      paranoid: true,
    },
  );
  sequelize.sync();
  return User;
};
