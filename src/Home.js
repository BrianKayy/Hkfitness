import React from 'react'
import Features from './Features';
import Pricing from './Pricing';
import trainer from "./images/trainer.jpeg";

function Home() {
  return (
    <div className="main">

    <div className= "welcome-section">
    <section className="hero">

      <div className="hero-container">

        <div className="hero-text">
          <h1>
            Transform Your Body. <br />
            <span>Unlock Your Potential.</span>
          </h1>

          <p>
            Train smarter, get stronger, and achieve the results you deserve.
            Personalized coaching, expert guidance, and programs designed
            to help you become the best version of yourself.
          </p>

          <button className="hero-btn" onClick={() => window.location.href = "./Contact"}>Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src={trainer}
            alt="Personal trainer helping client workout"
          />
        </div>

      </div>

    </section>

    </div>
    <Features/>
    <Pricing/>
    </div>
  )
}

export default Home;