const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phoneNumber: String
});

module.exports = mongoose.model('Car', carSchema);
