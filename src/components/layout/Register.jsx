import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch("https://user-management-server-3.onrender.com/users", {  // Replace with your Render API URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Registration successful! Redirecting to login...");
        navigate("/login"); // Redirect to login after successful registration
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setError("Failed to register. Try again.");
      });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
