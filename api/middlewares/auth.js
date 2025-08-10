var express = require('express');
var app = express()
const jwt = require('jsonwebtoken')
const error_helper = require('../../helpers/errors')

module.exports = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const authHeader = req.headers.authorization
            if (authHeader.startsWith('Bearer')) {
                try {
                    const token =  authHeader.replace('Bearer ', '')
                    const {name, id, phone, email} = jwt.verify(token, 'Chave')

                    req.user = {
                        id,
                        name,
                        phone,
                        email, 
                    }
                } catch (error) {
                    throw error_helper.invalidToken
                }
            }
        }
        
        if (!req.user) {
            throw error_helper.tokenNotFound;
        }

        next();
    } catch (error) {
        res.status(error.code || 500).send({message: error.message})
    }
}