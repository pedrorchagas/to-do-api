const sequelize_helper = require('../../helpers/sequelize')
const User = require('../models/user')
const { Sequelize } = require('sequelize')
const login_service = require('../services/login')
const error_helper = require('../../helpers/errors')
const user_service = require('../services/user')

async function login(req, res) {
    try {
        const sequelize = await sequelize_helper.getConnection()
        const userInfo = {}

        if (req.headers.authorization) {
            const authHeader = req.headers.authorization
            if (authHeader.startsWith('Basic')) {
                const base64Part = authHeader.substring('Basic '.length)
                const decodedCredentials = Buffer.from(base64Part, 'base64').toString('utf8')
                const [basicUser, basicPass] = decodedCredentials.split(':')

                info.name = basicUser;
                info.password = basicPass;
                info.email = basicUser
            }
        } else if (req.body) {
            userInfo.name = req.body.name
            userInfo.email = req.body.name
            userInfo.password = req.body.password
        }

        if ((!userInfo.name || !userInfo.email) || !userInfo.password) {
            throw error_helper.credentialsNotFound
        }

        const user = await user_service.getUser(sequelize, userInfo)

        if (user) {
            let token = await login_service.generateToken(user)
            res.status(200).send({
                message: 'Login feito com sucesso!',
                token,
            })
        } else {
            throw error_helper.userNotFound
        }
    } catch(error) {
        throw error
    }

}

module.exports = {
    login,
}