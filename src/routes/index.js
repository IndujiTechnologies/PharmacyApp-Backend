const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

// Example route
router.get('/', sampleController.getWelcomeMessage);

module.exports = router;