const express = require('express');
const router = express.Router();
const gymController = require("../Controllers/gymController")

router.post('/book', gymController.bookGym);

module.exports = router;
