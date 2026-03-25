import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Essential Start",
    button: "Free Consultation",
    features: [
      "Initial fitness assessment",
      "Basic workout program",
      " training sessions per week",
      "Email support",
      "Progress tracking"
    ]
  },
  {
    title: "Active Growth",
    button: "Free Consultation",
    features: [
      "Full fitness assessment",
      "Custom workout programs",
      " training sessions per week",
      "Nutrition guidance",
      "Weekly progress review",
      "Direct trainer messaging"
    ]
  },
  {
    title: "Elite Transformation",
    button: "Free Consulation",
    premium: true,
    features: [
      "Complete fitness & lifestyle assessment",
      "Fully customized workout plan",
      " training sessions per week",
      "Personalized nutrition plan",
      "Weekly body composition analysis",
      "Daily trainer support",
      "Advanced performance tracking",
      "Priority coaching access"
    ]
  }
];

 function Pricing() {
      const navigate = useNavigate();
  return (
    <section className="pricing-section">

      <h2 className="pricing-title">Coaching Plans</h2>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.premium ? "premium" : ""}`}
          >
            <h3>{plan.title}</h3>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck className="check" /> {feature}
                </li>
              ))}
            </ul>

            <button className="plan-btn"   onClick={() => navigate("/Contact")}>{plan.button}</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Pricing;