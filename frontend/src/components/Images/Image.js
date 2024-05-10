import React from 'react';
import './image.css';

function Image() {
    return (
        <div>
            <div className='center'>
                <h1 style={{ fontSize: "33px", textAlign: "center" }}>We've Got It Blogged</h1>
                <strong>Your Best Practices Guide for all your local service needs</strong>
            </div >
            <div className="image-gallery-container">
                <div className="image-container">
                    <img src="./images/a4.jpg" alt="Image 1" />
                    <p className='bold'>28 Fully Funded PhD Programs at the University of South</p>
                    <p>
                        The University of Southern Denmark has ample opportunities
                        for study-abroad students to pursue their dream programs that
                        are fully funded in various research areas. These research programs
                        are such that they will place you on a higher pedestal when......
                    </p>
                    <div className='box'>
                        READ MORE...
                    </div>
                </div>

                <div className="image-container">
                    <img src="./images/a3.jpg" alt="Image 2" />
                    <p className='bold'>Revamp Your Homes for a Rejuvenating Summer Retreat</p>
                    <p>
                        Summer is a season of life and happiness.
                        It is when we enjoy summer breaks and spend
                        a lot of time with the family. As the temperature
                        outside would be soaring high, keeping the house bright
                        and warm during this season is very important. Adding co......
                    </p>
                    <div className='box'>
                        READ MORE...
                    </div>
                </div>

                <div className="image-container">
                    <img src="./images/aa2.jpg" alt="Image 2" />
                    <p className='bold'>Get Set to Host a Low-Budget Summer Party</p>
                    <p>
                        It's summer and time for a holiday plan.
                        With the past few years spent confined and
                        distanced socially,this summer is the time
                        for bash and back to socializing. It is also
                        when kids have summer vacations and want to
                        indulge in fun and frolic. From......
                    </p>
                    <div className='box'>
                        READ MORE...
                    </div>
                </div>

                <div className="image-container">
                    <img src="./images/a1.jpg" alt="Image 2" />
                    <p className='bold'>Why is Summer the Best Season Of Every Year!</p>
                    <p>
                        Summer is a season of warmth, sunshine,
                        and outdoor adventures. It's the time
                        of year when school is out, vacations
                        are planned, and memories are made.
                        Summer brings with it a sense of freedom,
                        relaxation, and possibility. From beach days to barbec......
                    </p>
                    <div className='box'>
                        READ MORE...
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Image;
