const express = require('express');
const { signup, login, googleLogin, verifyToken } = require('../controllers/authController');

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", googleLogin);
router.post("/verify", verifyToken)

module.exports = router;