// Booking.js (Model)
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    service: String, // 'car', 'fitpass', 'appointment', 'plumber', etc.
    name: String,
    email: String,
    address: String,
    phoneNumber: String,
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
