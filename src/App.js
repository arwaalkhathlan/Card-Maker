import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext.js"; 
import Profile from "./pages/Profile";
import Landing from "./pages/Landing"; // Import the new Landing component
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const { currentUser } = false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Home" />;
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <section>
            <Routes>
              <Route path="/" element={<Landing />} /> {/* New landing page route */}
              <Route path="/Register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
