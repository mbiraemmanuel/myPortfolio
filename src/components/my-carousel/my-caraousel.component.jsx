import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/carousel1.jpg';
import slide2 from '../../assets/carousel2.jpg';
import slide3 from '../../assets/carousel3.jpg';
import Scroll from "../scroll-down/scroll-down.component";

import './my-carousel.style.css';

const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img className="d-block w-100 slide" src={slide1} alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 slide" src={slide2} alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 slide" src={slide3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <Scroll />
        </div>
    );
}

export default MyCarousel;