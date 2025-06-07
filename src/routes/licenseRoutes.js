const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const licenseController = require('../controllers/licenseController');

router.use(authMiddleware);

// Route to create a new license for a user
router.post('/', licenseController.createLicense);

// Route to get all licenses for the authenticated user
router.get('/', licenseController.getLicense);

// Route to update a specific license by its ID
router.put('/:id', licenseController.updateLicense);

module.exports = router;