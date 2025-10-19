const express = require('express');

const router = express.Router();
const signup = require('../controllers/signup');

router.post('/', async (req, res) => {
  try {
    await signup.create(req, res);
  } catch (error) {
    res.status(error.code || 500).send({ message: error.message });
  }
});

module.exports = router;
