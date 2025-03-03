import React from "react";
//import "./index.css"; // Styles are already merged in index.css

const Index = () => {
  return (
    <div className="index-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Live <span className="highlight">Lingo</span></h1>
          <h2>
          Connect in Real Time with Livelingo!
          </h2>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="livelingo.png" alt="livelingo" />
        </div>
      </header>
    </div>
  );
};

export default Index;
