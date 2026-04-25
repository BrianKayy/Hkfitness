import React from "react";
import "./App.css";
import tr1 from "./images/tr1.jpeg";
import tr2 from "./images/tr2.jpeg";
import tr3 from "./images/tr3.jpeg";
import tr4 from "./images/tr4.jpeg";
import tr5 from "./images/tr5.jpeg";
import tr7 from "./images/tr7.jpeg";
import tr6 from "./images/tr6.jpeg";
import tr8 from "./images/tr8.jpeg";
import tr9 from "./images/tr9.jpeg";
import tr11 from "./images/tr11.jpeg";
import tr14 from "./images/trainer.jpeg";
import tr10 from "./images/tr10.jpeg";
import v1 from "./images/v1.mov";
import v3 from "./images/v3.mov";
import v5 from "./images/v5.mov";

 function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-header">
        <h2>Real Work. Real Results.</h2>
        <p>
          Step into the journey of transformation. Train harder, push limits,
          and become the strongest version of yourself.
        </p>
      </div>

      <div className="gallery-grid">

        {/* Images */}
         <div className="gallery-item">
          <img src={tr11} alt="Client workout session"/>
        </div>

        <div className="gallery-item">
          <img src={tr14} alt="Gym coaching"/>
        </div>

        <div className="gallery-item">
          <img src={tr1} alt="Client workout session"/>
        </div>

        <div className="gallery-item">
          <img src={tr2} alt="Personal training session"/>
        </div>

        <div className="gallery-item">
          <img src={tr3} alt="Strength training"/>
        </div>

        <div className="gallery-item">
          <img src={tr4} alt="Gym coaching"/>
        </div>
          <div className="gallery-item">
          <img src={tr5} alt="Client workout session"/>
        </div>

        <div className="gallery-item">
          <img src={tr6} alt="Personal training session"/>
        </div>

        <div className="gallery-item">
          <img src={tr7} alt="Strength training"/>
        </div>

        <div className="gallery-item">
          <img src={tr8} alt="Gym coaching"/>
        </div>
      
         <div className="gallery-item">
          <img src={tr9} alt="Strength training"/>
        </div>
        <div className="gallery-item">
          <img src={tr10} alt="Strength training"/>
        </div>

        {/* Videos */}

        <div className="gallery-item video">
          <video controls>
            <source src={v1} type="video/mp4" />
          </video>
        </div>

        
        <div className="gallery-item video">
          <video controls>
            <source src={v3} type="video/mp4" />
          </video>
        </div>
        
        <div className="gallery-item video">
          <video controls>
            <source src={v5} type="video/mp4" />
          </video>
        </div>

      </div>

    </section>
  );
}
export default Gallery;