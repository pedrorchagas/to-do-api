var express = require('express');
var router = express.Router();
var signup = require('../controllers/signup')

/* GET home page. */
router.post('/', async function(req, res, next) {
    await signup.create(req, res)
});

module.exports = router;