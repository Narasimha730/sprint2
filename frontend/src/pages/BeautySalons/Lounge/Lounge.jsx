import React, { useState } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import './Lounge.css';
import { PersonCircle, Star, Stars, } from 'react-bootstrap-icons';

export function Lounge() {

    return (
        <div className='car'>
            <img src="./images/beautyimg1.jpg" className='carimage' />
            <div className='car_info'>
                <h3>Sponsored
                    Zieda Beauty Lounge <span className='car_ratings'>4.5<StarFill></StarFill></span>
                </h3>

                <h6>Address: Road no-10, HayathNagar - Ashok Nagar, Masab Tank, Hyderabad, Telangana 500927</h6>
                <h6 className='Car_timings'>Opens at 9AM to 6PM</h6>
            </div>

            <div className='review_book_container'>
                <div className='review'>
                    <h2>Write a Review</h2>
                    <form>
                        <div>
                            <label htmlFor="author">Your Name:</label>
                            <input
                                type="text"
                                id="author"

                            />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <input
                                type="number"
                                id="rating"
                                min="1"
                                max="5"
                            />
                        </div>
                        <div>
                            <label htmlFor="comment">Comment:</label>
                            <textarea
                                id="comment"

                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>



                <div className='book_car'>
                    <h2>Book a Appointment</h2>
                    <form>
                        <div>
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            />
                            <small className='small'>Format: 123-456-7890</small>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
