const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const categoryController = require('../controllers/categoryController');

router.use(authMiddleware);

// Route to create a new category
router.post('/create', categoryController.createCategory);

// Route to get all categories for the authenticated user
router.get('/', categoryController.getCategoriesByUser);

// Route to get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// Route to update a category by ID
router.put('/:id', categoryController.updateCategory);

// Route to delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;