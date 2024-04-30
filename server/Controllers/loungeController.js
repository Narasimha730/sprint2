const Lounge = require('../models/Lounge');

exports.bookLounge = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        // Create new lounge booking in MongoDB
        const loungeBooking = new Lounge({ name, email, address, phoneNumber });
        await loungeBooking.save();
        res.status(201).json({ message: 'Lounge booked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
