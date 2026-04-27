import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./index.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Basic – AED 800/month",
    button: "Free Consultation",
    features: [
      "Personalized workout plan",
      "Weekly progress check-in",
      "Nutrition guidance",
      "WhatsApp support"
    ]
  },
  {
    title: "Standard – AED 1,200/month",
    button: "Free Consultation",
    premium: true,
    features: [
      "2 personal training sessions per week",
      "Customized workout & nutrition plan",
      "Weekly progress tracking",
      "Ongoing support and motivation"
    ]
  },
  {
    title: "Premium – AED 1,800/month",
    button: "Free Consultation",
    features: [
      "4 personal training sessions per week",
      "Full body transformation coaching",
      "Personalized workout & meal guidance",
      "Weekly progress assessments",
      "Priority daily support"
    ]
  }
];

function Pricing() {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Personal Trainer Pricing Dubai | HK Fitness Plans</title>

        <meta
          name="description"
          content="Affordable personal training plans in Dubai starting from AED 800/month. Choose Basic, Standard or Premium coaching for fat loss, muscle gain and transformation."
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/pricing"
        />
      </Helmet>

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

              <button
                className="plan-btn"
                onClick={() => navigate("/Contact")}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}

export default Pricing;