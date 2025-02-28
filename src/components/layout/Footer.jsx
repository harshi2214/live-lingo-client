import React from "react";
//import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@livelingo.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Chat Street, Web City, WC 45678</p>
        </div>
      </div>

      <p className="footer-bottom">© 2024 LiveLingo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
