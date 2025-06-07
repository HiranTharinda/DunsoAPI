const express = require('express');
const router = express.Router();
const openaiController = require('../controllers/openaiController');

router.post('/completion', openaiController.getCompletion);

module.exports = router;