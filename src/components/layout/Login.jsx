import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch("https://user-management-server-3.onrender.com/users")
      .then((response) => response.json())
      .then((users) => {
        const foundUser = users.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (foundUser) {
          // Store user data and set isAuthenticated
          localStorage.setItem("user", JSON.stringify(foundUser));
          localStorage.setItem("isAuthenticated", "true");

          // Navigate to dashboard
          navigate("/dashboard");
        } else {
          setError("Invalid email or password!");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Failed to log in. Try again.");
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
