const express = require('express');
const router = express.Router();
const loungeController = require('../Controllers/loungeController');

router.post('/book', loungeController.bookLounge);

module.exports = router;
