import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import "./App.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle scroll visibility
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Added Dashboard Route */}
          </Routes>
        </main>
        <Footer />

        {/* Back to Top Button */}
        {showScroll && (
          <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
