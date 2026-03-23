import React from "react";
import "./App.css";
import trainer1 from "./images/trainer1.jpeg";
import trainer2 from "./images/trainer2.jpeg";
import trainer3 from "./images/trainer3.jpeg";
import trainer4 from "./images/trainer4.jpeg";
import trainer5 from "./images/trainer5.mp4";

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
          <img src={trainer1} alt="Client workout session"/>
        </div>

        <div className="gallery-item">
          <img src={trainer2} alt="Personal training session"/>
        </div>

        <div className="gallery-item">
          <img src={trainer3} alt="Strength training"/>
        </div>

        <div className="gallery-item">
          <img src={trainer4} alt="Gym coaching"/>
        </div>

        {/* Videos */}

        <div className="gallery-item video">
          <video controls>
            <source src={trainer5} type="video/mp4" />
          </video>
        </div>

        <div className="gallery-item video">
          <video controls>
            <source src={trainer5} type="video/mp4" />
          </video>
        </div>

      </div>

    </section>
  );
}
export default Gallery;