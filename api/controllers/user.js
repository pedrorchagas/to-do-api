const sequelize_helper = require('../../helpers/sequelize')
const { Sequelize } = require('sequelize')
const user_service = require('../services/user')


async function getUser(req, res) {
    try {
        const sequelize = await sequelize_helper.getConnection()
        const userInfo = req.user

        const user = await user_service.getUser(sequelize, userInfo)

        res.status(200).send({
        message: "Veja as informações sobre o seu usuário",
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    })
    } catch(error) {
        throw error
    }
}

async function deleteUser(req, res) {
    try {
        const sequelize = await sequelize_helper.getConnection()
        const userInfo = req.user

        await user_service.deleteUser(sequelize, userInfo)

        res.status(200).send({
            message: "O usuário foi deletado com sucesso!",
        })
    } catch (error) {
        throw error
    }

}

async function editUser(req, res) {
    try {
        const sequelize = await sequelize_helper.getConnection()
        const userInfo = req.user

        const newInfoUser = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }

        await user_service.editUser(sequelize, userInfo, newInfoUser)

        res.status(200).send({
            message: "Usuário editado com sucesso!",
            newData: newInfoUser
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUser,
    deleteUser,
    editUser,
}