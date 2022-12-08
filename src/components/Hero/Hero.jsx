import React from "react";
import "./Hero.css";
import img from "../../assets/hero.png";
const Hero = (props) => {
  return (
    <div style={props.style} className="hero">
      <div>
        <p className="hero-title">{props.title}</p>
        <p className="hero-description">{props.description}</p>
      </div>
      <div>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
export default Hero;
