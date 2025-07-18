var express = require('express');
var router = express.Router();

// Puxa a informação sobre o usuário
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Deleta o registro do usuário
router.delete('/', function(req, res, next) {

})

// Edita informações sobre o usuário
router.put('/', function(req, res, next) {
    
})

module.exports = router;