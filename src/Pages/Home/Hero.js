import React from 'react';
import { Button } from 'react-bootstrap';
import hero from "../../images/hero.jpg";

const Hero = () => {
  return (
    <div style={{
      background: `url(${hero})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      width: "100%",
    }}>
        <h1
          className="p-5"
          style={{
            fontWeight: "900",
            fontFamily: "Poppins",
            letterSpacing: "0.6rem",
          }}
        >
          LET US BE
          <br />
          YOUR EYE <br /> IN THE SKY
        </h1>
        <p className="px-5 pb-5" style={{ fontFamily: "Poppins" }}>
          Now you can shop Dji Drones, Dji Accessories, Dji Spare parts from the
          comfort of your home. <br /> For hassle free shopping, we have cash on
          delivery, Debit/Credit Card, <br /> Bkash/Rocket & other major MFS,
          UpTo 18 Months EMI options
        </p>
        <Button className="px-5 py-2 mx-5 mb-5 rounded-pill">Learn More</Button>
          </div>
    );
};

export default Hero;