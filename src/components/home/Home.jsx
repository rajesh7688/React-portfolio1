import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./home.css";
import img from "../home/img1.jpeg";
import Header from "../header/Header";
import { About, ContactForm } from "../component";
const Home = ({ setScale }) => {
  const [txtTransform, setTxtTransform] = useState();
  const [isContact, setIsContact] = useState(false);
  const [isTxtTransform, setIsTxtTransform] = useState(0);

  useEffect(() => {
    setTxtTransform("0");
    setIsTxtTransform(0.8);
  }, []);

  useEffect(() => {
    localStorage.setItem("txtAnimate", txtTransform);
  }, [txtTransform]);

  const scaleCircle = () => {
    setScale("30");
  };

  const showForm = () => {
    setIsContact(true);
  };

  useEffect(() => {
    setTxtTransform("0");
  }, []);

  useEffect(() => {
    // Apply transition property after a delay
    setTimeout(() => {
      setTxtTransform("1");
    }, 100);
  }, []);

  return (
    <div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
        }}
      >
        <div className="container">
          <div
            className="home"
            id="home1"
            onClick={() => (isContact === true ? setIsContact(false) : "")}
          >
            <div className="home-text">
              <div className="bounding">
                <h1
                  className={`home-text-h1`}
                  style={{
                    transform: `translateY(${txtTransform})`,
                    transition: "1s",
                  }}
                >
                  Hi, I'm{" "}
                </h1>
              </div>
              <div className="bounding">
                <h1
                  className="home-text1-h1"
                  style={{
                    transform: `translateY(${txtTransform})`,
                    transition: "1s",
                    transitionDelay: ".5s",
                  }}
                >
                  Rajesh.
                </h1>
              </div>
              <div className="animate">
                <p
                  className="endtxt"
                  style={{
                    transform: `translateY(${txtTransform})`,
                    transition: "1s",
                    transitionDelay: ".8s",
                  }}
                >
                  I build amazing things for the web.
                </p>
              </div>
              {isContact && <ContactForm setIsContact={setIsContact} />}

              {/* <div className="home-btn" >
            <a href="#contect" className='btn-text'>Contact me.</a>
          </div> */}
            </div>
            <div
              className="homeFooter"
              style={{ opacity: isTxtTransform, transition: "all 6s" }}
            >
              <p className="homeFooterText">
                I am a web developer specializing in Front-End development. A
                MERN Stack enthusiast, JavaScript lover.
              </p>
              <p className="homeFooterText">
                I am a web developer specializing in Front-End development. A
                MERN Stack enthusiast, JavaScript lover.
              </p>
              <p className="homeFooterText">
                I am a web developer specializing in Front-End development. A
                MERN Stack enthusiast, JavaScript lover.
              </p>
            </div>
            <div
              className="homeFooter1"
              style={{ opacity: isTxtTransform, transition: "all 6s" }}
            >
              <p className="homeFooterText1">
                I am a web developer specializing in Front-End development. A
                MERN Stack enthusiast, JavaScript lover.
              </p>
              <p className="homeFooterText1">
                I am a web developer specializing in Front-End development. A
                MERN Stack enthusiast, JavaScript lover.
              </p>
              <p className="homeFooterText1">
                I am a web developer specializing in Front-End development. A
                MERN Stack enthusiast, JavaScript lover.
              </p>
            </div>
            <div className="svg-box">
              <div className="svg-container">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 100, 100 m 75, 0 a 75,75 0 1,1 -150,0 a 75,75 0 1,1 150,0"
                    id="path-circle"
                    fill="none"
                  />
                  <text>
                    <textPath href="#path-circle" fill="white">
                      RAJESH REACT DEVELOPER || JAVASCRIPT LOVER ||
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <div
              className="arrow"
              onClick={() => showForm(setIsContact(true))}
              onMouseOver={() => scaleCircle()}
              onMouseOut={() => setScale("1")}
            >
              <div>Contact Me.</div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};
{
  /* <div className='home-img'>
          <img src={img} alt="" />
        </div> */
}
export default Home;
