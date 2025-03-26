import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/layout/Login";
import Register from "../components/layout/Register";
import Dashboard from "../components/layout/Dashboard";
import Profile from "../components/layout/Profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protect Dashboard and Profile Routes */}
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
