import React from "react";
import "./App.css";
import trainer6 from "./images/pf1.jpeg";

function About() {
  return (
    <section className="about-coach">

      <div className="about-container">

        {/* Portrait */}
        <div className="coach-portrait">
          <img src={trainer6} alt="Hakim Ssembatya Portrait"/>
        </div>

        {/* Bio */}
        <div className="coach-bio">
         <h2>Hakim</h2>
      <h3>Certified Personal Coach</h3>

      <p>
        With years of experience transforming lives, Hakim is more than just a personal trainer—he is a mentor, motivator, and dedicated partner in your fitness journey. His holistic approach combines science-based training, personalized nutrition guidance, and consistent support to help every client achieve real, lasting results.
      </p>

      <p>
        Hakim’s passion for health and fitness is reflected in the remarkable transformations of his clients. Whether your goal is fat loss, muscle building, strength development, or improving endurance, every program is tailored with precision and purpose.
      </p>

      <p>
        Each session is carefully designed to challenge you, build discipline, and unlock your full potential—no shortcuts, just proven methods that work.
      </p>

      <p>
        <strong>What You Can Expect:</strong> Personalized training programs tailored to your goals and fitness level, science-based coaching focused on sustainable progress, nutrition guidance to support performance and recovery, accountability and support every step of the way, and a results-driven approach with measurable progress.
      </p>

      <p>
        <strong>Why Train with HK:</strong> Beyond technical expertise, Hakim is known for his positive energy and motivating presence. He creates an environment where clients feel confident, supported, and inspired to push beyond their limits.
      </p>

      <p>
        His mission goes beyond physical transformation—it’s about building lifelong habits, strong mindsets, and a healthier, more confident version of you.
      </p>

      <p>
        <strong>Join HKFitness:</strong> When you join HKFitness, you’re not just signing up for training—you’re becoming part of a community focused on growth, discipline, and transformation.
      </p>

      <p>
        Hakim’s coaching extends beyond the gym, equipping you with the tools, knowledge, and confidence to maintain your results and live a stronger, healthier lifestyle.
      </p>

      <p>
        <strong>Start Your Transformation Today:</strong> Take the first step towards becoming your best self. Train with purpose. Train with HK.
      </p>
        </div>

      </div>

    </section>
  );
}
export default About;