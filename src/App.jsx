import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
import Dashboard from "./components/layout/Dashboard";
import Profile from "./components/layout/Profile";
import CreateChatroom from "./components/layout/CreateChatroom";
import ChatroomPage from "./components/layout/ChatroomPage"; // ✅ Correct now!

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreateChatroom />} />
            <Route path="/chatroom/:id" element={<ChatroomPage />} /> {/* ✅ This now works */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
