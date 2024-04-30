
import { Facebook, Google, Twitter, Youtube } from 'react-bootstrap-icons';
import './footer.component.css';
import React from 'react';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="col text-center">
                            &nbsp; <p className="mt-3 header-website-name">Find Dubai</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}


