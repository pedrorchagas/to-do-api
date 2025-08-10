var express = require('express');
var app = express()
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    console.log(req.headers);

    if (req.headers.authorization) {
        const authHeader = req.headers.authorization
        if (authHeader.startsWith('Bearer')) {
            const token =  authHeader.replace('Bearer ', '')
            const {name, userId, phone, email} = jwt.verify(token, 'Chave')

            req.user = {
                userId,
                name,
                phone,
                email, 
            }
        }
    }
    

    

    next();
}