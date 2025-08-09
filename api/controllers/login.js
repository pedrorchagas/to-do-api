const sequelize_helper = require('../../helpers/sequelize')
const User = require('../models/user')
const { Sequelize } = require('sequelize')
const login_service = require('../services/login')
const error_helper = require('../../helpers/errors')

async function login(req, res) {
    try {
        const sequelize = await sequelize_helper.getConnection()
        console.log(req.body)
        var name = req.body.name
        var password = req.body.password

        const user = await User(sequelize, Sequelize.DataTypes).findOne({
            where: {
                name: name,
                password: password,
                active: true
            }
        })

        if (user) {
            let token = await login_service.generateToken(user.dataValues)
            res.status(200).send({
                message: 'Login feito com sucesso!',
                token,
            })
        } else {
            throw error_helper.userNotFound
        }
    } catch(error) {
        console.log(error)
    }

}

module.exports = {
    login,
}