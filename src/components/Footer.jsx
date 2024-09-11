import React from "react";
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/App.css";

const socialLinks = [
  { icon: FaWhatsapp, url: "https://api.whatsapp.com/message/U2AGKL6BTU6YK1?autoload=1&app_absent=0" },
  { icon: FaTwitter, url: "https://x.com/Wetaan_Co" },
  { icon: FaInstagram, url: "https://www.instagram.com/wetaan_co/" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/wetaan/" },
];

const Footer = () => (
  <footer className="footer container">
    <div className="footer-line" />
    <div className="container footer-container">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-6 col-12 mb-3 mb-md-0 text-center text-md-start">
          <p className="footer-text mb-0">الخيار الأمثل في رحلة تحولك الرقمي.</p>
        </div>
        <div className="col-md-6 col-12 text-center text-md-end">
          <div className="social-icons">
            {socialLinks.map(({ icon: Icon, url }) => (
              <a key={url} href={url} role="button" className="icon-link social-icon mx-2">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
