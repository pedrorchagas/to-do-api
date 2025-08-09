const { v4: uuidv4 } = require('uuid')
const redis_helper = require('../../helpers/redis')
const jwt = require('jsonwebtoken')

async function generateToken(userDataValue) {
    const payload = {
        userId: userDataValue.id,
        phone: userDataValue.phone,
        email: userDataValue.email,
    }

    const secretKey = 'Chave'

    const options = {
        expiresIn: '24h',
        issuer: 'to-do-api'
    }

    const token = jwt.sign(payload, secretKey, options)
    return token
}

module.exports = {
    generateToken,
}