import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

 function Footer() {
      const navigate = useNavigate();
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand + Promo */}

        <div className="footer-brand">
          <h2>Hk<span>Fitness</span></h2>

          <p>
            Ready to transform your body and elevate your lifestyle?
            Start your fitness journey today with expert personal coaching.
          </p>

          <button className="footer-btn" onClick={() => navigate("/Contact")}>Reach Out</button>
        </div>


        {/* Contact Info */}

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: movicbanks18@gmail.com</p>
          <p>Phone: +971 56 234 1357</p>
          <p>Location: Dubai – UAE</p>
        </div>


        {/* Social Media */}

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
          <a href="https://www.instagram.com/hkfitness_1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/hakim-ssembatya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> 
          </a>
          <a href="https://wa.me/0562341357" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.youtube.com/c/HKFitness" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">
        <p>Copyright © 2026 HKfitness</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;