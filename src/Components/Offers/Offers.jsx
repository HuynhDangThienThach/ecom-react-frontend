import React from 'react'
import './Offer.css'
import Carousel from "react-bootstrap/Carousel";
import bg1 from '../Assets/bg1.jpg'
import bg2 from "../Assets/bg2.png";
const Offers = () => {
  // return (
  //   <div className="offers">
  //     <img src={bg1} alt="" />
  //     {/* <div className="offers-left">
  //       <h1>Exclusive</h1>
  //       <h1>Offers For You</h1>
  //       <p>ONLY ON BEST SELLERS PRODUCTS</p>
  //       <button>Check Now</button>
  //     </div>
  //     <div className="offers-right">
  //       <img src={bg1} alt="" />
  //     </div> */}
  //   </div>
    return (
      <Carousel data-bs-theme="dark" className="offers">
        <Carousel.Item>
          <img className="d-block w-100" src={bg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    );
};


//   );
// }

export default Offers
