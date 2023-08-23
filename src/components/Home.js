import React, { Component } from "react";
import img from "../screenshot1.png";
import { Parallax } from 'react-scroll-parallax';


class Home extends Component {
  render() {
    return (
      <div className="home-screen">
        <div className="center-div1">
          <h1>Empowering Curators, Enriching Perspectives</h1>
          <span>Welcome to Creativise! Unleashing the power of curation. We empower curators worldwide, providing them with a robust platform to showcase their expertise and amplify their impact. We believe in the power of curation and helps in turning a perspective into reality.
          </span>
          <button>Get Started</button>
        </div>
        <div className="center-div2">
          <div className="sub-div1 center">
          <h2>Unleash your creativity in your curative zone !</h2>
            <span>
            Whether you're a creative enthusiast or a professional designer, Creativise zone is the first browser based design tool that allows to create stunning graphics with more user friendly experience. It has the power of stitching your .psd (Photoshop) and .ai (Illustrator) files with intuitive features to meet all your design needs. This tool prioritizes user-friendliness and aims to provide a seamless and enjoyable design experience like never before.
            </span>
            <a>Explore Now<i className="fa fa-arrow-right"></i></a>
          </div>
          <div className="sub-div2 center">
              <Parallax translateY={['-100px', '150px']}>
              <img src={img}/>
              </Parallax>
          </div>
        </div>
        <div className="center-div3">
        <div className="spiral-line"></div>
        <div className="rectangle"></div>
        <div className="rectangle-shadow"></div>
        <div className="rectangle2"></div>
        <div className="rectangle2-shadow"></div>
        <div className="triangle"></div>
        <div className="triangle-shadow"></div>
        <div className="wave"></div>
        <h1>Get the freedom to be more creative!</h1>
          <span>Let your imagination soar in the magical world where creativity knows no bounds, where knowledge and expertise intertwine to create something truly extraordinary, fostering brilliance and enabling new ideas to flourish.
          </span>
          <button>Get Started</button>
        </div>
      </div>
    );
  }
}

export default Home;
