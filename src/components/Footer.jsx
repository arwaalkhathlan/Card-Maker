import React from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"> </div>

      <div className="footer-content footer-container">
        <div className="footer-text">
          <p>الخيار الأمثل في رحلة تحولك الرقمي.</p>
        </div>

        <div className="social-icons">

          
          <a
            href="https://api.whatsapp.com/message/U2AGKL6BTU6YK1?autoload=1&app_absent=0"
            role="button"
            className="icon-link icon-link-hover social-icon pb-2 p-1 rounded"
          >
            <FaWhatsapp />
            
          </a>
          <a
            href="https://x.com/Wetaan_Co"
            role="button"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/wetaan_co/"
            role="button"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/wetaan/"
            role="button"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
