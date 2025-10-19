const jwt = require('jsonwebtoken');

async function generateToken(user) {
  const payload = {
    id: user.id,
    name: user.name,
    phone: user.phone,
    email: user.email,
  };

  const secretKey = 'Chave';

  const options = {
    expiresIn: '24h',
    issuer: 'to-do-api',
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}

module.exports = {
  generateToken,
};
