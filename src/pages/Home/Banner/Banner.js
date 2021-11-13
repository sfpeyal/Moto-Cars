import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import './Banner.css'



const Banner = () => {
    return (

        <Carousel className="banner-container">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="fs-1">WELCOME TO MOTO CARS</h1>
                    <p>We have collection of high speedy cars.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"

                />

                <Carousel.Caption>
                    <h1 className="fs-1">WELCOME TO MOTO CARS</h1>
                    <p>We have collection of classic looking cars.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="fs-1">WELCOME TO MOTO CARS</h1>
                    <p>We have collection of regular models of cars.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;