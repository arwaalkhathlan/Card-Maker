import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import { doSignOut } from "../firebase/auth";
import { Toast } from "react-bootstrap"; // Import Toast from Bootstrap

// Popup component using Bootstrap Toast
const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Hide after 5 seconds
    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, [onClose]);

  return (
    <Toast
      onClose={onClose}
      show={true}
      delay={5000}
      autohide
      className="position-fixed top-0 start-50 translate-middle-x mt-3 bg-dark text-light"
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
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

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page when the logo is clicked
  };

  return (
    <header className="bg-transparent py-3 d-flex align-items-center">
      <div className="logo">
        <button
          onClick={handleLogoClick}
          className="border-0 bg-transparent p-0"
        >
          <img
            src="https://greetingsdev.wetaan.com/bootstrap/images/logos/logo_wetaan.png"
            alt="Logo"
            className="img-fluid"
          />
        </button>
      </div>
      <div className="ms-auto">
        {userLoggedIn ? (
          <button
            onClick={handleLogout}
            className="logout btn btn-link text-decoration-none text-primary"
          >
            تسجيل الخروج
          </button>
        ) : (
          <>
            <Link
              className="Login btn btn-link text-white text-decoration-none me-2"
              to={"/login"}
            >
              تسجيل دخول
            </Link>
            <Link
              className="Register btn btn-link text-white text-decoration-none text-primary"
              to={"/register"}
            >
              حساب جديد
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
