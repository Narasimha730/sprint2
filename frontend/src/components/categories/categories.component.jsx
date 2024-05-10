import './categories.component.css';
import { Link } from 'react-router-dom';


export function HomeCategories() {
    return (
        <div>
            <div>
                <h1 style={{ fontSize: "33px", textAlign: "center" }}>Most Popular Categories</h1>
                <div style={{ marginLeft: "100px" }}>
                    <div className='container'>
                        <div className='row ' style={{ width: "100%" }}>
                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/carmain" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/carlogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Car Rentals</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/fitnessCenters" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/fitnesslogo.avif" className='categories' />
                                    <h6 style={{ marginLeft: "7px", fontFamily: " sans-serif" }}>Fitness Center</h6>
                                </Link>
                            </div>


                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/beautysalons" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/beautylogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "9px", fontFamily: " sans-serif" }}>Beauty Salons</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/plumber" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/plumberlogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Plumber</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/travel" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/travellogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Travel Agencies</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/restaurant-main" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/homelogo.png" className='categories' />
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Home Services</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/grocery" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/grocerylogo.webp" className='categories' />
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Groceries</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/electrician" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/electricianlogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Electrician</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/banks" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/bankslogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "15px", fontFamily: " sans-serif" }}>Banks</h6>
                                </Link>
                            </div>


                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/atm" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/atmlogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "16px", fontFamily: " sans-serif" }}>ATMs</h6>
                                </Link>
                            </div>

                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/hotels" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/hotellogo.png" className='categories' />
                                    <h6 style={{ marginLeft: "16px", fontFamily: " sans-serif" }}>Hotels</h6>
                                </Link>
                            </div>


                            <div className='mt-4 col-sm-6 col-md-2  ' style={{ alignItems: "center" }}>
                                <Link to="/school" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src="./images/schoollogo.jpg" className='categories' />
                                    <h6 style={{ marginLeft: "16px", fontFamily: " sans-serif" }}>Schools</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
