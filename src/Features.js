import React from "react";

import { FaWeight, FaAppleAlt, FaDumbbell, FaClipboardList, FaLaptop, FaUserCheck } from "react-icons/fa";

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
    title: "Weight Gain",
    icon: <FaClipboardList />,
    text: "Structured training strategies designed to help you gain weight and stay healthy."
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
    <section className="features-section">
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
  );
}

export default Features;