const jwt = require('jsonwebtoken');
const { key } = require('../types/key.js');

module.exports = function() {
    return function(req, res, next) {
        if (req.method === "OPTIONS") next();
    
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({ message: "The user is not sign in."});
            }
            const { role } = jwt.verify(token, key);
            console.log(role);
            let hasRole = false;
            if(role === 'admin') {
                hasRole = true;
            }
            if (!hasRole) {
                return res.status(403).json({ message: "You don't have access."});
            }
            next();
        } catch (error) {
            console.log(error);
            return res.status(403).json({ message: "The user is not sign in."});
        }
    }
}