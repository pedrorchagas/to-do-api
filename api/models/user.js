const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init(
        {   
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true

            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: 1
            }
        },
        {
            sequelize,
            modelName: 'User',
            timestamps: true
        }
    )
    sequelize.sync()
    return User
}