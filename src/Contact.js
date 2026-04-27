import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    weight: "",
    gender: "",
    nationality: "",
    city: "",
    goal: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendUrl =
      process.env.REACT_APP_BACKEND_URL ||
      "https://hkfitnessinrender.onrender.com";

    try {
      const response = await fetch(`${backendUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          weight: "",
          gender: "",
          nationality: "",
          city: "",
          goal: ""
        });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please check console for details.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Personal Trainer Dubai | HK Fitness</title>

        <meta
          name="description"
          content="Contact HK Fitness in Dubai for personal training, weight loss coaching, strength programs and custom fitness plans."
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/contact"
        />
      </Helmet>

      <section className="client-form-section">
        <div className="form-container">
          <h2>Start Your Transformation</h2>

          <p className="form-subtitle">
            Tell us about yourself so we can design the perfect training program for you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />

              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={formData.weight}
                onChange={handleChange}
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                placeholder="Location"
                value={formData.city}
                onChange={handleChange}
              />

              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              >
                <option value="">Fitness Goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Nutrition</option>
                <option>Other</option>
              </select>

            </div>

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;