const Gym = require('../models/Gym');

exports.bookGym = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        // Create new gym booking in MongoDB
        const gymBooking = new Gym({ name, email, address, phoneNumber });
        await gymBooking.save();
        res.status(201).json({ message: 'Gym booked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
