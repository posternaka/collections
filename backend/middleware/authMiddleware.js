const jwt = require('jsonwebtoken');
const { key } = require('../types/key.js');

module.exports = function(req, res, next) {
    if (req.method === "OPTIONS") next();
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: "The user is not sign in."});
        }
        const decodedData = jwt.verify(token, key);
        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ message: "The user is not sign in."});
    }
}