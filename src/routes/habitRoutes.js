const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const habitController = require('../controllers/habitController');

router.use(authMiddleware);

// Route to create a new habit
router.post('/create', habitController.createHabit);

// Route to get all habits
router.get('/', habitController.getHabitsByUser);

// Route to get a habit by ID
router.get('/:id', habitController.getHabitById);

// Route to update a habit by ID
router.put('/:id', habitController.updateHabit);

// Route to delete a habit by ID
router.delete('/:id', habitController.deleteHabit);

module.exports = router;