const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.use(authMiddleware);

router.get('/me', userController.getCurrentUser);
router.put('/me', userController.updateCurrentUser);
router.delete('/me', userController.deleteCurrentUser);

module.exports = router;