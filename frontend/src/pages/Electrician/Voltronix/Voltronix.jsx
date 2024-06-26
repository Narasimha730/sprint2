// import React, { useState } from 'react';
// import { StarFill } from 'react-bootstrap-icons';
// import './Voltronix.css';
// import { PersonCircle, Star, Stars, } from 'react-bootstrap-icons';

// export function Voltronix() {

//     return (
//         <div className='car'>
//             <img src="./images/e1.jpg" className='carimage' />
//             <div className='car_info'>
//                 <h3>Jumbo Electronix <span className='car_ratings'>4.5<StarFill></StarFill></span>
//                 </h3>

//                 <h6>Address: Road no-10, HayathNagar - Ashok Nagar, Masab Tank, Hyderabad, Telangana 500927</h6>
//                 <h6 className='Car_timings'>Opens at 9AM to 6PM</h6>
//             </div>

//             <div className='review_book_container'>
//                 <div className='review'>
//                     <h2>Write a Review</h2>
//                     <form>
//                         <div>
//                             <label htmlFor="author">Your Name:</label>
//                             <input
//                                 type="text"
//                                 id="author"

//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="rating">Rating:</label>
//                             <input
//                                 type="number"
//                                 id="rating"
//                                 min="1"
//                                 max="5"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="comment">Comment:</label>
//                             <textarea
//                                 id="comment"

//                             />
//                         </div>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>



//                 <div className='book_car'>
//                     <h2>Book Electrician</h2>
//                     <form>
//                         <div>
//                             <label htmlFor="name">Your Name:</label>
//                             <input type="text" id="name" />
//                         </div>
//                         <div>
//                             <label>Email:</label>
//                             <input type="email" id="email" />
//                         </div>
//                         <div>
//                             <label htmlFor="address">Address:</label>
//                             <input type="text" id="address" />
//                         </div>
//                         <div>
//                             <label htmlFor="phoneNumber">Phone Number:</label>
//                             <input
//                                 type="tel"
//                                 id="phoneNumber"
//                                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                             />
//                             <small className='small'>Format: 123-456-7890</small>
//                         </div>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div >
//     )
// }


import React, { useState } from 'react';
import axios from 'axios';
import './Voltronix.css';
import { StarFill } from 'react-bootstrap-icons';

export function Voltronix() {
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
            await axios.post('http://localhost:7000/api/bookings/eletrician', formData);
            alert('Electrician booked successfully..!');
            setFormData({
                name: '',
                email: '',
                address: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error booking electricain:', error);
            alert('An error occurred while booking. Please try again.');
        }
    };

    return (
        <div className='root'>
            <div className='car-image'>
                <img src='./images/e1.jpg' alt='' />
            </div>
            <div className='car_info'>
                <h3>Jumbo electronics</h3>
                <span style={{ border: '1px solid', color: 'white', background: 'green', padding: '3px', borderRadius: '2px' }}>4.2</span>
                <h6>Address: Road no-10, HayathNagar - Ashok Nagar, Masab Tank, Hyderabad, Telangana 500927</h6>
                <h6 className='Car_timings'>Opens at 9AM to 6PM</h6>
                <div>
                    <h2>About</h2>
                    <p>Cheap Daily Rates & No Airport Fees. No Hidden Costs. Book Now & Save! Late Model Cars. View Latest Deals.
                    </p>
                </div>
            </div>
            <div className='review-book-container'>
                <div className='book-car'>
                    <h2 >Book Electrician</h2>
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
                            <small>Format: 123-456-7890</small>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
}
