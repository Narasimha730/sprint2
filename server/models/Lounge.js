const mongoose = require('mongoose');

const loungeSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phoneNumber: String
});

module.exports = mongoose.model('Lounge', loungeSchema);
