const crypto = require('crypto')

function generateHex(n) {
    return crypto.randomBytes(n).toString('hex')
}

module.exports = {generateHex}