import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
//import "./components/styles/Footer.css";
//import "./components/styles/Header.css";
// import "./components/styles/Index.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
