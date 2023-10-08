import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./home.css";
import img from "../home/img1.jpeg";
const Home = () => {

  const [txtTransform, setTxtTransform] = useState()
  window.addEventListener('load', (event) => {
    setTxtTransform('0')
  })

  return (
    <>
      <div className="home" id="home1">
        <div className="home-text">
          <div className="bounding">
            <h1 className={`home-text-h1`} style={{transform: `translateY(${txtTransform})`, transition: '1s'}}>Hi, I'm </h1>
          </div>
          <div className="bounding">
            <h1 className="home-text1-h1" style={{transform: `translateY(${txtTransform})`, transition: '1s', transitionDelay: '.5s'}}>Rajesh.</h1>
          </div>
          <div className="animate">
            <p className="home-text-h3">I build amazing things for the web.</p>
            <p className="home-text-h3">I build amazing things for the web.</p>
          </div>
          {/* <div className="home-btn" >
            <a href="#contect" className='btn-text'>Contact me.</a>
          </div> */}
        </div>
        <div className="homeFooter">
          <p className="homeFooterText">
            I am a web developer specializing in Front-End development. A MERN
            Stack enthusiast, JavaScript lover.
          </p>
          <p className="homeFooterText">
            I am a web developer specializing in Front-End development. A MERN
            Stack enthusiast, JavaScript lover.
          </p>
          <p className="homeFooterText">
            I am a web developer specializing in Front-End development. A MERN
            Stack enthusiast, JavaScript lover.
          </p>
        </div>
      </div>

      <div className="arrow">
        <div>

        </div>
      </div>
    </>
  );
};
{
  /* <div className='home-img'>
          <img src={img} alt="" />
        </div> */
}
export default Home;
