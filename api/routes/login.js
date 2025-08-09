var express = require('express');
var router = express.Router();
var login = require('../controllers/login')

/* GET home page. */
router.post('/', async function(req, res, next) {
    try {
        await login.login(req, res)
    } catch(error) {
        res.status(error.code || 500).send({message: error.message})
    } 
});

module.exports = router;