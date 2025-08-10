const sequelize_helper = require('../../helpers/sequelize')
const User = require('../models/user')
const { Sequelize } = require('sequelize')
const login_service = require('../services/login')
const error_helper = require('../../helpers/errors')

async function login(req, res) {
    try {
        const sequelize = await sequelize_helper.getConnection()
        let username;
        let password;

        if (req.headers.authorization) {
            const authHeader = req.headers.authorization
            if (authHeader.startsWith('Basic')) {
                const base64Part = authHeader.substring('Basic '.length)
                const decodedCredentials = Buffer.from(base64Part, 'base64').toString('utf8')
                const [basicUser, basicPass] = decodedCredentials.split(':')

                username = basicUser;
                password = basicPass;
            }
        } else if (req.body) {
            username = req.body.name
            password = req.body.password
        }

        if (!username || !password) {
            throw error_helper.credentialsNotFound
        }

        const user = await User(sequelize, Sequelize.DataTypes).findOne({
            where: {
                [Sequelize.Op.or]: [
                    { name: username },
                    { email: username } 
                ],
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
        throw error
    }

}

module.exports = {
    login,
}