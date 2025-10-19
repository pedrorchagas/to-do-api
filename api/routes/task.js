const express = require('express');

const router = express.Router();

// Puxa todos as task associadas ao usuário
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Puxa a task específica
router.get('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Edita uma task específica
router.put('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Deleta uma task
router.delete('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Cria uma nova task
router.post('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
