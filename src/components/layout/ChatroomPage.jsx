import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
//import "./ChatroomPage.css"; // Make sure to include the updated CSS

const ChatroomPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [chatroom, setChatroom] = useState(location.state || null);
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (!chatroom) {
      fetch(`https://user-management-server-3.onrender.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setChatroom(data))
        .catch((err) => console.error("Failed to load chatroom", err));
    }
  }, [id, chatroom]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    setMessages([...messages, {
      text: inputMessage,
      sender: "You",
      time: new Date().toLocaleTimeString()
    }]);
    setInputMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const getAvatar = (name) => name?.charAt(0).toUpperCase();

  if (!chatroom) return <div className="loading">Loading chatroom...</div>;

  return (
    <div className="chatroom-container">
      {/* Sidebar */}
      <div className="sidebar">
        <input className="search-bar" placeholder="Search..." />
        <div className="user-tile">
          <div className="avatar">{getAvatar(chatroom.name)}</div>
          <span>{chatroom.name}</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-info">
            <div className="avatar-large">{getAvatar(chatroom.name)}</div>
            <h3>{chatroom.name}</h3>
          </div>
          <div className="chat-actions">
            <button>📞</button>
            <button>🎥</button>
            <button>⋮</button>
            <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        {/* Chatroom Meta Info */}
        <div className="chatroom-meta">
          <p><strong>Description:</strong> {chatroom.description}</p>
          <p><strong>Language:</strong> {chatroom.language}</p>
          <p><strong>Max Participants:</strong> {chatroom.maxParticipants}</p>
          <p><strong>Privacy:</strong> {chatroom.isPrivate ? "Private" : "Public"}</p>
        </div>

        {/* Messages */}
        <div className="messages">
          {messages.length === 0 && (
            <div className="empty-message">
              Start chatting in <strong>{chatroom.name}</strong>...
            </div>
          )}
          {messages.map((msg, index) => (
            <div className="message-item" key={index}>
              <span className="sender">{msg.sender}:</span>
              <span className="text">{msg.text}</span>
              <span className="time">{msg.time}</span>
            </div>
          ))}

          {/* Typing Animation */}
          <div className="typing-indicator">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatroomPage;
