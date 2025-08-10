var express = require('express');
var router = express.Router();
const user = require('../controllers/user')

// Puxa a informação sobre o usuário
router.get('/', async function(req, res, next) {
  try {
    await user.getUser(req, res)
  } catch (error) {
    res.status(error.code || 500).send({message: error.message})
  }
});

// Deleta o registro do usuário
router.delete('/', async function(req, res, next) {
  try {
    await user.deleteUser(req, res)
  } catch(error) {
    res.status(error.code || 500).send({message: error.message})
  }
})

// Edita informações sobre o usuário
router.put('/', async function(req, res, next) {
  await user.editUser(req, res)
})

module.exports = router;