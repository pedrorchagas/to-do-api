const express = require('express');

const app = express();

module.exports = (req, res, next) => {
  console.log('passou aqui!!! testeeee');
  next();
};
