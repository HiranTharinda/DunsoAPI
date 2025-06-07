const jwt = require('jsonwebtoken');

const authService = {
    verifyToken: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
};

module.exports = authService;