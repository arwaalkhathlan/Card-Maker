import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";

// Popup component
const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Hide after 5 seconds
    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, [onClose]);

  return (
    <div className="popup">
      <div className="popup-content">
        <span>{message}</span>
      </div>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State for logout popup

  const handleLogout = () => {
    doSignOut()
      .then(() => {
        setShowLogoutPopup(true); // Show the logout popup
        navigate("/"); // Redirect to the home page
      })
      .catch((error) => {
        console.error("Logout failed", error); // Handle logout error
      });
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://greetingsdev.wetaan.com/bootstrap/images/logos/logo_wetaan.png"
          alt="Logo"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        {userLoggedIn ? (
          <>
            <button
              onClick={handleLogout} // Use handleLogout here
              className="text-sm text-blue-600 underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="Login text-sm text-blue-600 underline" to={"/login"}>
              Login
            </Link>
            <Link className="Register text-sm text-blue-600 underline" to={"/register"}>
              Register New Account
            </Link>
          </>
        )}
      </div>

      {/* Logout Popup */}
      {showLogoutPopup && (
        <Popup
          message="You have been logged out successfully."
          onClose={() => setShowLogoutPopup(false)}
        />
      )}
    </header>
  );
};

export default Header;
