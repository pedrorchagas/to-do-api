const { createClient } = require('redis');

const client = createClient()

async function createConnection() {
    client.on('error', error => console.log('Redis client error: ', error) )
    try {
        await client.connect()
    } catch(error) {
        console.log('Redis error: ', error)
    }
}

async function save(key, value) {
    
}


module.exports = {
    createConnection,
}
