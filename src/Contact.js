import React, { useState } from "react";
import "./index.css";

 function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
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
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
            />

            <select name="gender" onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>

            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
            />

            <select name="goal" onChange={handleChange}>
              <option value="">Fitness Goal</option>
              <option>Weight Loss</option>
              <option>Weight Gain</option>
              <option>Nutrition</option>
              <option>Other</option>
            </select>

          </div>

          <button type="submit" className="submit-btn">
            Start My Fitness Journey
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;