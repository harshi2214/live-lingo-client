import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 

const Login = () => { 
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState(""); 
const navigate = useNavigate();  

const handleSubmit = (e) => { 
e.preventDefault(); 

if (!email || !password) { 
alert("Please enter both email and password."); 
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

<div className="input-group"> 
<label>Email</label> 
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
</div> 

<div className="input-group"> 
<label>Password</label> 
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> 
</div> 

<button type="submit" className="btn">Login</button> 

<p> Dont have an account? <Link to="/register">Register</Link> </p> 
</form> 
</div> 
); 
};  

export default Login;
