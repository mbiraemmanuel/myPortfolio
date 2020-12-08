import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/carousel1.jpg';
import slide2 from '../../assets/crow.png';
import slide3 from '../../assets/carousel3.jpg';
import Scroll from "../scroll-down/scroll-down.component";

import './my-carousel.style.css';

const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img className="d-block w-100 slide" src={slide2} alt="Slide" />
                    <Carousel.Caption>
                        <blockquote>
                            <p>The Ultimate measure of a man is not where he stands in the moments if comfort, but where he stands at times of challenge an controversy</p>
                            <cite>Martin Luther King Jr.</cite>
                        </blockquote>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Scroll />
        </div>
    );
}

export default MyCarousel;