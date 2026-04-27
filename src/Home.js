import React from 'react';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Features from './Features';
import Pricing from './Pricing';
import trainer from "./images/trainer.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">

      {/* SEO */}
      <Helmet>
        <title>Personal Trainer Dubai | HK Fitness Coaching</title>

        <meta
          name="description"
          content="Transform your body with HK Fitness. Personal training in Dubai for fat loss, muscle gain, strength and complete body transformation."
        />

        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <div className="welcome-section">
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

              <button
                className="hero-btn"
                onClick={() => navigate("/Contact")}
              >
                Get Started
              </button>
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

      <Features />
      <Pricing />

    </div>
  );
}

export default Home;