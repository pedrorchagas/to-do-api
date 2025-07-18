var express = require('express');
var router = express.Router();

// Puxa todos as task associadas ao usuário
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Puxa a task específica
router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Edita uma task específica
router.put('/:id', function(req, res, next) {

})

// Deleta uma task
router.delete('/:id', function(req, res, next) {

})

// Cria uma nova task
route.post('/:id', function(req, res, next) {
    
})



module.exports = router;