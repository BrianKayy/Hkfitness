import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

 function Footer() {
      const navigate = useNavigate();
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand + Promo */}

        <div className="footer-brand">
          <h2>HK<span>fitness</span></h2>

          <p>
            Ready to transform your body and elevate your lifestyle?
            Start your fitness journey today with expert personal coaching.
          </p>

          <button className="footer-btn" onClick={() => navigate("/Contact")}>Reach Out</button>
        </div>


        {/* Contact Info */}

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: hkfitness@email.com</p>
          <p>Phone: +971 00 000 0000</p>
          <p>Location: Dubai – UAE</p>
        </div>


        {/* Social Media */}

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaWhatsapp />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">
        <p>Copyright © 2026 HKfitness</p>
      </div>

    </footer>
  );
}

export default Footer;