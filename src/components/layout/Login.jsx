import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get stored user details from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Validate credentials
        if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
            alert("Invalid email or password. Please try again.");
            return;
        }

        // Login successful
        console.log("Login successful!");
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="btn">Login</button>

                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
