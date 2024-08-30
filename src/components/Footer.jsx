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
    <footer className="footer container">
      {/* Footer Line */}
      <div className="footer-line"> </div>

      {/* Footer Content */}
      <div className="container footer-container">
        <div className="row align-items-center justify-content-between">
          {/* Text Section */}
          <div className="col-md-6 col-12 mb-3 mb-md-0 text-center text-md-start">
            <p className="footer-text mb-0">الخيار الأمثل في رحلة تحولك الرقمي.</p>
          </div>

          {/* Social Icons Section */}
          <div className="col-md-6 col-12 text-center text-md-end">
            <div className="social-icons ">
              <a
                href="https://api.whatsapp.com/message/U2AGKL6BTU6YK1?autoload=1&app_absent=0"
                role="button"
                className="icon-link social-icon mx-2"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/Wetaan_Co"
                role="button"
                className="social-icon mx-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/wetaan_co/"
                role="button"
                className="social-icon mx-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/wetaan/"
                role="button"
                className="social-icon mx-2"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
