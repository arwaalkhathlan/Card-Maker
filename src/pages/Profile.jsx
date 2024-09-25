import React from "react";
import { useAuth } from "../context/AuthContext.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCards.jsx"; 

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      <div className="Profile container mt-5 d-flex flex-column align-items-center">
        <div className="text-center mb-4">
          <h1 className="Text-Title text-primary">Profile</h1>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">User Information</h5>
            <p className="card-text"><strong>Name:</strong> {currentUser.displayName || "N/A"}</p>
            <p className="card-text"><strong>Email:</strong> {currentUser.email}</p>
          </div>
        </div>
      </div>
      <UserCard />
      <Footer />
    </>
  );
};

export default Profile;
