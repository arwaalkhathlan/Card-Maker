import React from "react";
import "../styles/App.css";
import Googlelogin from "./Googlelogin";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://greetingsdev.wetaan.com/bootstrap/images/logos/logo_wetaan.png"
          alt="Logo"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Googlelogin />
      </div>
    </header>
  );
};

export default Header;
