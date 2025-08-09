var express = require('express');
var router = express.Router();
var signup = require('../controllers/signup')

/* GET home page. */
router.post('/', async function(req, res, next) {
    try {
        await signup.create(req, res)
    } catch(error) {
        res.status(error.code || 500).send({message: error.message})
    }
});

module.exports = router;