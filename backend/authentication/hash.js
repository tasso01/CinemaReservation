const bcrypt = require('bcrypt');

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function comparePasswords(a, b) {
    return await bcrypt.compare(a, b);
}

module.exports = { hashPassword, comparePasswords }