const jwt = require('./jwt');

const checkAuth = (req, res, next) => {
    try {
        if (req.headers['authorization'] == null) {
            res.sendStatus(401);
        } else {
            let token = req.headers['authorization'];
            token = token.slice(7, token.lenth);
            jwt.checkToken(token);
            next();
        }
    } catch (error) {
        console.log(error.message);
        res.sendStatus(401);
    }
    
}

module.exports = {checkAuth}