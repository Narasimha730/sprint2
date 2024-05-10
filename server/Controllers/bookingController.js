
const Booking = require('../models/Booking');

exports.bookCar = async (req, res) => {
    try {

        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'car', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Car booked successfully....' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the car' });
    }
};



exports.bookFitpass = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'fitpass', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Fitpass booked successfully...' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the fitpass' });
    }
};

exports.bookAppointment = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'appointment', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Appointment booked successfully...' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the appointment' });
    }
};

exports.bookPlumber = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'plumber', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Plumber booked successfully...' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the plumber' });
    }
};


exports.bookGroceries = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'groceries', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'grocery booked successfully...' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the grocery' });
    }
};



exports.bookTravel = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'travel', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'your travel booking successfully...' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the grocery' });
    }
};


exports.bookEletrician = async (req, res) => {
    try {
        const { name, email, address, phoneNumber } = req.body;
        const newBooking = new Booking({ service: 'eletrician', name, email, address, phoneNumber });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'your Electrician booking successfully...' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while booking the grocery' });
    }
};

