import React from "react";
import './Hero.css'
import background1 from "../Assets/background1.png";
import background2 from "../Assets/background2.jpg";
import background3 from "../Assets/background3.jpg";
import Carousel from 'react-bootstrap/Carousel';
const Hero = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={background1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={background2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={background3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
