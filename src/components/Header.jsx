import React from "react";
import "../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
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
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/Home");
                });
              }}
              className="text-sm text-blue-600 underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="text-sm text-blue-600 underline" to={"/login"}>
              Login
            </Link>
            <Link className="text-sm text-blue-600 underline" to={"/register"}>
              Register New Account
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
