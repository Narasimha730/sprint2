// RiseUp.js
import React, { useState } from 'react';
import axios from 'axios';
import './RiseUp.css';

export function RiseUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/api/bookings/plumber', formData);
            alert('Plumber booked successfully!');
            setFormData({
                name: '',
                email: '',
                address: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error booking Plumber:', error);
            alert('An error occurred while booking. Please try again.');
        }
    };

    return (
        <div className='root'>
            <div className='car-image'>
                <img src="./images/plumberheader.jpg" />
            </div>
            <div className='car_info'>
                <h3>RiseUp</h3>
                <span className='car_ratings'>4.5</span>
                <h6>Address: Road no-10, HayathNagar - Ashok Nagar, Masab Tank, Hyderabad, Telangana 500927</h6>
                <h6 className='Car_timings'>Opens at 9AM to 6PM</h6>
                <div>
                    <h2>About</h2>
                    <p>A plumber is someone who fixes or puts in piping systems, plumbing fixtures and equipment such as water heaters.  </p>
                </div>
            </div>
            <div className='review-book-container'>
                <div className='book-car'>
                    <h2>Book a Plumber</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            <small className='small'>Format: 123-456-7890</small>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
