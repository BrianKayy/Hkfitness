import React from "react";
import { Helmet } from "react-helmet-async";

import {
  FaWeight,
  FaAppleAlt,
  FaDumbbell,
  FaClipboardList,
  FaLaptop,
  FaUserCheck
} from "react-icons/fa";

const features = [
  {
    title: "Weight Loss",
    icon: <FaWeight />,
    text: "Personalized training strategies designed to help you lose fat and stay healthy."
  },
  {
    title: "Nutrition",
    icon: <FaAppleAlt />,
    text: "Custom nutrition advice and meal planning to support your fitness goals."
  },
  {
    title: "Muscle Gain",
    icon: <FaClipboardList />,
    text: "Structured training strategies designed to help you gain muscle and stay healthy."
  },
  {
    title: "Custom Workouts",
    icon: <FaDumbbell />,
    text: "Workout routines built around your schedule, equipment, and fitness level."
  },
  {
    title: "Online Coaching",
    icon: <FaLaptop />,
    text: "Train anywhere with full online coaching support and accountability."
  },
  {
    title: "Personal Guidance",
    icon: <FaUserCheck />,
    text: "Continuous support and adjustments to keep you progressing."
  }
];

function Features() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Fitness Coaching Features | HK Fitness Dubai Trainer</title>

        <meta
          name="description"
          content="Explore HK Fitness coaching services in Dubai including weight loss, muscle gain, nutrition plans, online coaching and personalized fitness programs."
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/features"
        />
      </Helmet>

      <section className="features-section">
        <h2>Personal Training Features</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Features;