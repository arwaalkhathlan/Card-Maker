import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../context/authContext";
import Header from "../components/Header";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage("Invalid email or password. Please try again.");
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage("Failed to sign in with Google. Please try again.");
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/Home"} replace={true} />}
      <Header />

      <main className="d-flex align-items-center justify-content-center vh-100">
        <div
          className="card p-4 shadow-lg border-0"
          style={{ width: "24rem", backgroundColor: "#fff" }}
        >
          <div className="card-body">
            <h3 className="text-center mb-4 text-dark">تسجيل الدخول</h3>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted">
                  الأيميل
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-muted">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              {errorMessage && (
                <div className="alert alert-danger text-center">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSigningIn}
                className={`btn btn-primary w-100 ${
                  isSigningIn ? "disabled" : ""
                }`}
              >
                {isSigningIn ? "Signing In..." : "تسجيل الدخول"}
              </button>
            </form>
            <div className="text-center mt-3">
              <span className="text-muted">عندك حساب؟ </span>
              <Link to={"/register"} className="text-decoration-none fw-bold">
                أضغط هنا
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <hr className="flex-grow-1 me-2" />
              <span className="text-muted">OR</span>
              <hr className="flex-grow-1 ms-2" />
            </div>
            <button
              disabled={isSigningIn}
              onClick={onGoogleSignIn}
              className={`btn btn-outline-secondary w-100 mt-3 ${
                isSigningIn ? "disabled" : ""
              }`}
            >
              {isSigningIn ? "Signing In..." : "Continue with Google"}

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                style={{ width: "20px", marginRight: "8px", marginBottom: "3px" }}
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
