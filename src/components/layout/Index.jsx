import React, { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      console.log("Scroll Position:", window.scrollY); // Debugging
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="index-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>
            Live <span className="highlight">Lingo</span>
          </h1>
          <h2>Connect in Real Time with Livelingo!</h2>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="livelingo.png" alt="livelingo" />
        </div>
      </header>

      {/* Extra Content to Allow Scrolling */}
{/* Features Section */}
<div className="features-section">
  <h2 className="features-title">Key Features of LiveLingo</h2>
  <div className="features-grid">
    {[
      { title: "Instant Messaging", description: "Real-time chat with seamless experience.", icon: "💬" },
      { title: "User Profiles", description: "View and manage user profiles effortlessly.", icon: "👤" },
      { title: "Chat Rooms", description: "Join and create chat rooms for discussions.", icon: "🏠" },
      { title: "File Sharing", description: "Easily send and receive files.", icon: "📁" },
      { title: "End-to-End Encryption", description: "Secure messaging with top-notch encryption.", icon: "🔒" },
      { title: "Live Typing Indicator", description: "See when others are typing.", icon: "⌨️" },
      { title: "Voice & Video Calls", description: "Seamless voice and video call integration.", icon: "📞" },
      { title: "Notification Alerts", description: "Stay updated with real-time notifications.", icon: "🔔" }
    ].map((feature, index) => (
      <div key={index} className="feature-card">
        <span className="feature-icon">{feature.icon}</span>
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
      </div>
    ))}
  </div>
</div>


      {/* Back to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑
        </button>
      )}

      {/* Inline Styles */}
      <style>
        {`
          .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            transition: opacity 0.3s ease-in-out, transform 0.2s ease-in-out;
            opacity: ${isVisible ? 1 : 0}; /* Ensure visibility works */
            z-index: 1000; /* Ensure it's on top */
          }

          .back-to-top:hover {
            background: #0056b3;
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Index;
