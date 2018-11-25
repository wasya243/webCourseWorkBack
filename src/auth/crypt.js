const crypto = require('crypto');

const {DRUG_STORE_SALT} = process.env;

module.exports = {
  encryptPassword,
  verifyPassword
};

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, DRUG_STORE_SALT, 10, 64, 'sha512', (error, derivedKey) => {
      error ? reject(error) : resolve(derivedKey.toString('hex'));
    });
  });
}

async function verifyPassword(rawPassword, encryptedPassword) {
  return encryptedPassword === (await encryptPassword(rawPassword));
}