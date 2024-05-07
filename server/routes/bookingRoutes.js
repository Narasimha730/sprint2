// bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/car', bookingController.bookCar);
router.post('/fitpass', bookingController.bookFitpass);
router.post('/appointment', bookingController.bookAppointment);
router.post('/plumber', bookingController.bookPlumber);

module.exports = router;
