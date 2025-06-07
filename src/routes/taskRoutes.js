const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const taskController = require('../controllers/taskController');

router.use(authMiddleware); // Protect all routes below

// Route to create a new task
router.post('/', taskController.createTask);

// Route to get a specific task by ID
router.get('/:id', taskController.getTaskById);

// Route to get all tasks for the authenticated user
router.get('/', taskController.getTasksByUser);

// Route to update a task by ID
router.put('/:id', taskController.updateTask);

// Route to delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;