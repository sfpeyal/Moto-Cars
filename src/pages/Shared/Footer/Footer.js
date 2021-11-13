import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsPhone } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container py-2">
            <div className="d-flex mx-auto justify-content-around footer">
                <div className="footer-single">
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Feedback</p>
                    <p>Moto Cars Privacy Policy</p>
                    <BsFacebook className="fs-3 me-2 text-secondary" />
                    <BsInstagram className="fs-3 me-2 text-secondary" />
                    <BsPhone className="fs-3 me-2 text-secondary" />
                    <BsTwitter className="fs-3 me-2 text-secondary" />
                </div>
            </div>
            <div className="copyright-container">
                <p className="text-center mt-4">Copyright &copy; 2021 MOTO CARS
                </p>
            </div>
        </div>
    );
};

export default Footer;