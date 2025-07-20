const { createClient } = require('redis');
const helper = require('../helpers/helper')

const client = createClient()

async function createConnection() {
    client.on('error', error => console.log('Redis client error: ', error) )
    try {
        await client.connect()
        console.log('Redis conectado com sucesso!!!')
    } catch(error) {
        console.log('Redis error: ', error)
    }
}

async function saveToken(key, userDataValue) {
    console.log(userDataValue)
    const json  = {
        id: userDataValue.id,
        name: userDataValue.name,
        phone: userDataValue.phone,
        password: userDataValue.password
    }
    console.log(json)
    await client.hSet(key, json) 
    await client.expire(key, 86400)
}


module.exports = {
    createConnection,
    saveToken,
}
