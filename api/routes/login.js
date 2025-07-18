var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    // Gerar o token para fazer a conexão
    res.render('index', { title: 'Express' });
});

module.exports = router;