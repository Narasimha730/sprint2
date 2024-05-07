// Gym.js
import React, { useState } from 'react';
import axios from 'axios';
import './gym.css'

export function Gym() {
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
            await axios.post('http://localhost:7000/api/bookings/fitpass', formData);
            alert('FitPass booked successfully!');
            setFormData({
                name: '',
                email: '',
                address: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error booking FitPass:', error);
            alert('An error occurred while booking. Please try again.');
        }
    };

    return (
        <div className='root'>
            <div className='car-image'>
                <img src="./images/fitnessimage1.png" />
            </div>
            <div className='car_info'>
                <h3>GymNation Motor City</h3>
                <span style={{ border: '1px solid', color: 'white', background: 'green', padding: '3px', borderRadius: '2px' }}>4.7</span>
                <h6>Address: Road no-10, HayathNagar - Ashok Nagar, Masab Tank, Hyderabad, Telangana 500927</h6>
                <h6 className='Car_timings'>Opens at 9AM to 6PM</h6>

                <div>
                    <h2>About</h2>
                    <p>a large room, usually containing special equipment, where people go to do physical exercise and get fit. </p>
                </div>
            </div>
            <div className='review_book_container'>
                <div className='book-car'>
                    <h2>Book a FitPass</h2>
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
