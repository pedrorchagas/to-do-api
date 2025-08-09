var express = require('express');
var app = express()

module.exports = (req, res, next) => {
    console.log(req.headers);

    

    next();
}