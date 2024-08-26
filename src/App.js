import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './context/authContext'; // Correct import for the AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <section>                              
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Home" element={<Home />} />

            </Routes>                    
          </section>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
