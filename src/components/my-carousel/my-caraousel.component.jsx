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
                    <Carousel.Caption>
                        <blockquote>
                            <h4>The Ultimate measure of a man is not where he stands in the moments if comfort, but where he stands at times of challenge an controversy</h4>
                            <cite>Martin Luther King Jr.</cite>
                        </blockquote>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 slide" src={slide2} alt="Third slide" />
                    <Carousel.Caption>
                        <blockquote>
                            <h4>If you can dream it, you can do it</h4>
                            <cite>Walt Disney</cite>
                        </blockquote>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 slide" src={slide3} alt="Third slide" />
                    <Carousel.Caption>
                        <blockquote>
                            <h4>To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment</h4>
                            <cite>Ralph Waldo Emerson</cite>
                        </blockquote>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Scroll />
        </div>
    );
}

export default MyCarousel;