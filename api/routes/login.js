const express = require('express');

const router = express.Router();
const login = require('../controllers/login');

router.post('/', async (req, res) => {
  try {
    await login.login(req, res);
  } catch (error) {
    res.status(error.code || 500).send({ message: error.message });
  }
});

module.exports = router;
