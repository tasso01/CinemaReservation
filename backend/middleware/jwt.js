const jwt = require('jsonwebtoken');

let options = {
    algorithm: "HS256",
    expiresIn: "8h"
}

let getPayload = (token) => {
    var decode = jwt.decode(token, {complete: true});
    return decode.payload;
}

let setToken = (id, username) => {
    let payload = {id: id, username: username};
    var token = jwt.sign(payload, "secret", options);
    return token;
}

let checkToken = (token) => {
    return jwt.verify(token, "secret", options);
}

module.exports = {setToken, getPayload, checkToken}