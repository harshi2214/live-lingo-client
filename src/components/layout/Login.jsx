import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for error messages
    const navigate = useNavigate();

    // Mock authentication (replace with API call when backend is ready)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const storedUser = JSON.parse(localStorage.getItem("user")); // Get stored user
        if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
            setError("Invalid email or password"); // Show error message
            return;
        }

        console.log("Login successful!");
        localStorage.setItem("isAuthenticated", "true");  
        navigate("/dashboard"); 
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                {error && <p className="error-message">{error}</p>} {/* Show error if login fails */}

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="btn">Login</button>

                <p>Dont have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
