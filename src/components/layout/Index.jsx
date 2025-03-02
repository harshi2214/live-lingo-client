import React from "react";
//import "./components/styles/Index.css";

const Index = () => {
  return (
    <div className="index-container">
      <section className="hero">
        <h1>Welcome to LiveLingo Chat</h1>
        <p>Connect, chat, and collaborate in real-time with your friends and colleagues.</p>
      </section>

      <section className="features">
        <div className="feature">
          <h2>🔹 Real-time Messaging</h2>
          <p>Enjoy smooth, real-time conversations with zero delays.</p>
        </div>

        <div className="feature">
          <h2>🔹 Secure & Private</h2>
          <p>End-to-end encryption ensures your chats stay safe.</p>
        </div>

        <div className="feature">
          <h2>🔹 Multi-Device Access</h2>
          <p>Chat from your laptop, tablet, or mobile anytime, anywhere.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;