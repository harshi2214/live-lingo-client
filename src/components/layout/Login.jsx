import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State for login inputs
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(""); // Clear error message on input change
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("https://user-management-server-3.onrender.com/users");
      const users = await response.json();

      console.log("Fetched users:", users); // Debugging

      // Find user by email & password
      const user = users.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        console.log("User found:", user); // Debugging

        // Store login status and user data
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to connect to server. Try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
