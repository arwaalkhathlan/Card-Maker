import React from "react";
import { useAuth } from "../context/AuthContext.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCards.jsx";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="container mt-5 d-flex flex-column align-items-center" style={{ backgroundRepeat: 'no-repeat' }}>
      <Header />

      <div className="text-center mb-4">
        <h1 className="Text-Title text-primary">Profile</h1>
      </div>
      <div className="row justify-content-center mb-4 text-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card w-100 ">
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <img src={currentUser.photoURL} alt="User Logo" className="img-fluid rounded-circle mb-3" />
              <p className="card-text">
                <strong>:Name</strong><br/> {currentUser.displayName || "N/A"}
              </p>
              <p className="card-text">
                <strong>Email:</strong> {currentUser.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <UserCard />

      <Footer />
    </div>
  );
};

export default Profile;
