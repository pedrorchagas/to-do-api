const User = require('../models/user')
const sequelize_helper = require('../../helpers/sequelize')
const { Sequelize } = require('sequelize')

async function create(req, res) {
    const sequelize = await sequelize_helper.getConnection();

    console.log('Body:', req.body)

    try {
        await User(sequelize, Sequelize.DataTypes).create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        })
        res.status(200).send({message: "Usuário criado com sucesso!"})
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    create
}