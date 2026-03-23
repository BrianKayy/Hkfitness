import React from "react";
import "./App.css";
import trainer6 from "./images/trainer6.jpeg";

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
          <h2>Hakim Ssembatya</h2>
          <h3>Certified Personal Coach</h3>

          <p>
            With years of experience transforming lives, Hakim Ssembatya is more than just a personal trainer he is a mentor, motivator, and dedicated partner in your fitness journey. His holistic approach combines science-backed training techniques, personalized nutrition guidance, and unwavering support to ensure every client achieves their best results.
          </p>

          <p>
            Hakim’s passion for health and fitness is evident in the remarkable transformations of his clients. Whether it’s weight loss, strength building, improving endurance, or creating sustainable healthy habits, he tailors every program with precision and care. Each workout, each session, is thoughtfully designed to challenge, motivate, and empower you.
          </p>

          <p>
            Beyond his technical expertise, Hakim is known for his approachable and encouraging nature. Clients often remark on his ability to inspire confidence, create a positive and energizing environment, and celebrate every milestone along the journey. His mission is not just about fitness it’s about fostering lifelong well being and helping individuals reach their full potential.
          </p>

          <p>
            When you work with Hakim, you’re not just signing up for a personal training program you’re joining a community dedicated to transformation. His guidance goes beyond the gym, equipping you with knowledge, motivation, and confidence to sustain your results and embrace a healthier, stronger lifestyle.
          </p>

          <p>
            Join Hakim Ssembatya today and experience a coaching journey that is personal, results driven, and inspiring. Every session is crafted to push your limits, nurture your growth, and celebrate your achievements, making the path to fitness not only effective but also enjoyable.
          </p>
        </div>

      </div>

    </section>
  );
}
export default About;