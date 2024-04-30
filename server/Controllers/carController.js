// const Car = require('../models/Car')
exports.bookCar = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        // Create new car booking in MongoDB
        const carBooking = new Car({ name, email, address, phoneNumber });
        await carBooking.save();
        res.status(201).json({ message: 'Car booked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
