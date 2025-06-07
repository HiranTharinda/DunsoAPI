const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const contextController = require('../controllers/contextController');

router.use(authMiddleware);

// Route to create a new context
router.post('/create', contextController.createContext);

// Route to get all contexts for a user
router.get('/', contextController.getContextsByUser);

// Route to get a specific context by ID
router.get('/:id', contextController.getContextById);

// Route to update a context
router.put('/:id', contextController.updateContext);

// Route to delete a context by ID
router.delete('/:id', contextController.deleteContext);

module.exports = router;