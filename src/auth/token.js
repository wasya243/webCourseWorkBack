const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const algorithm = 'HS512';

module.exports = {
  sign,
  verify
};

function sign(payload, expiresIn = '3h') {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, {algorithm, expiresIn}, (error, token) => error ? reject(error) : resolve(token));
  });
}

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, {algorithms: [algorithm]}, (error, payload) => error ? reject(error) : resolve(payload));
  });
}