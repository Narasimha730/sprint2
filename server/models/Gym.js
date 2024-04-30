const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phoneNumber: String
});

module.exports = mongoose.model('Gym', gymSchema);
