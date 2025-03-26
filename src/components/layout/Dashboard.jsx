import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Auth Check - isAuthenticated:", isAuthenticated);
    console.log("Auth Check - storedUser:", storedUser);

    if (!isAuthenticated || !storedUser) {
      navigate("/login"); // Redirect if not authenticated
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user"); // Ensure user data is removed
    navigate("/login");
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username}!</h2>
      <h2>Email: {user.email}</h2>
      <button onClick={handleLogout} className="btn">Logout</button>
    </div>
  );
};

export default Dashboard;
