

import { StarFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './CarMain.css'
export function CarMain() {
    return (
        <div>
            <div className='car_main_container'>
                <div className='row' >
                    <div className='col-4' >
                        <Link to="/lamborghini">

                            <img src='./images/carimage1.jpg' className='car_images' />
                        </Link>
                        <div className='row mt-3'>
                            <div className='col-8'>
                                <span><b>BMW X6 Model</b></span>
                            </div>
                            <div className='col-2'>
                                {/* <span className='car_ratings'>4.2&nbsp;<StarFill></StarFill></span> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p>The Smooth Six-Cylinder is perfect.which automatically distributes power between wheels for optimal traction and control</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>Opens Morning 9AM to 6Pm</p>
                            </div>
                            <div className='col-2'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>15km</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4' >

                        <img src='./images/carimage2.jpg' className='car_images' />
                        <div className='row mt-3'>
                            <div className='col-8'>
                                <span><b>Mercedes-Benz GLE</b></span>
                            </div>
                            <div className='col-2'>
                                {/* <span className='car_ratings'>4.2&nbsp;<StarFill></StarFill></span> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p>Mercedes-Benz is a germany luxury car brand</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:00 AM to Closes 6:00 PM</p>
                            </div>
                            <div className='col-2'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>20km</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4' >

                        <img src='./images/carimage3.jpg' className='car_images' />
                        <div className='row mt-3'>
                            <div className='col-8'>
                                <span><b>Mercedes-Benz EQS</b></span>
                            </div>
                            <div className='col-2'>
                                {/* <span className='car_ratings'>4.7&nbsp;<StarFill></StarFill></span> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p>Mercedes-Benz is a germany luxury car brand.</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:30 AM to Closes 9:30 PM</p>
                            </div>
                            <div className='col-2'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='car_main_container'>
                <div className='row' >
                    <div className='col-4' >

                        <img src='./images/carimage4.jpg' className='car_images' />
                        <div className='row mt-3'>
                            <div className='col-8'>
                                <span><b>Lamborghini Huracan EVO</b></span>
                            </div>
                            <div className='col-2'>
                                {/* <span className='car_ratings'>4.0&nbsp;<StarFill></StarFill></span> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p>Automobili LamBorghini s.p.a is an italian manufacturer od luxury sports cars.</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 24 hours</p>
                            </div>
                            <div className='col-2'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>20km</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4' >

                        <img src='./images/carimage5.jpg' className='car_images' />
                        <div className='row mt-3'>
                            <div className='col-8'>
                                <span><b>Ford Mustang</b></span>
                            </div>
                            <div className='col-2'>
                                {/* <span className='car_ratings'>3.5&nbsp;<StarFill></StarFill></span> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p>This is 1958 sports car.its beaten by ordinary golf 0-60 and at anything.</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:00 AM to Closes 5:00 PM</p>
                            </div>
                            <div className='col-2'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>35km</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4' >

                        <img src='./images/carimage6.jpg' className='car_images' />
                        <div className='row mt-3'>
                            <div className='col-8'>
                                <span><b>Mercedes-Benz EQS</b></span>
                            </div>
                            <div className='col-2'>
                                {/* <span className='car_ratings'>4.3&nbsp;<StarFill></StarFill></span> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p>Mercedes-Benz is a germany luxury car brand.</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 10:30 PM to Closes 11:00 PM</p>
                            </div>
                            <div className='col-2'>
                                <p style={{ color: 'rgb(234, 17, 158)' }}>44km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}