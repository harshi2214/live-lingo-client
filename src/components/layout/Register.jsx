import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser, faEnvelope, faPhone, faCalendar, faVenusMars,
  faUserCircle, faLock, faLanguage, faEye, faBell
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "",
    chatNickname: "",
    language: "English",
    visibility: "Public",
    notifications: "Yes",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
    }

    if (step === 2) {
      if (!formData.username) newErrors.username = "Username is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }

    if (step === 3) {
      if (!formData.chatNickname) newErrors.chatNickname = "Chat Nickname is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateStep()) {
      fetch("https://user-management-server-3.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Registration successful! Redirecting to login...");
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          alert("Failed to register. Try again.");
        });
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Step {step}: {step === 1 ? "Personal Details" : step === 2 ? "Account Credentials" : step === 3 ? "Chat Preferences" : "Review & Submit"}</h2>

        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faUser} /> Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faPhone} /> Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faCalendar} /> Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              {errors.dob && <p className="error-text">{errors.dob}</p>}
            </div>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faVenusMars} /> Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="error-text">{errors.gender}</p>}
            </div>
            <button type="button" className="btn" onClick={handleNext}>Next</button>
          </>
        )}

        {/* STEP 2: Account Credentials */}
        {step === 2 && (
          <>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faUserCircle} /> Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
              {errors.username && <p className="error-text">{errors.username}</p>}
            </div>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faLock} /> Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            <button type="button" className="btn" onClick={handlePrevious}>Previous</button>
            <button type="button" className="btn" onClick={handleNext}>Next</button>
          </>
        )}

        {/* STEP 3: Chat Preferences */}
        {step === 3 && (
          <>
            <div className="input-group">
              <label><FontAwesomeIcon icon={faUser} /> Chat Nickname</label>
              <input type="text" name="chatNickname" value={formData.chatNickname} onChange={handleChange} />
              {errors.chatNickname && <p className="error-text">{errors.chatNickname}</p>}
            </div>
            <button type="button" className="btn" onClick={handlePrevious}>Previous</button>
            <button type="button" className="btn" onClick={handleNext}>Next</button>
          </>
        )}

        {/* STEP 4: Review & Submit */}
        {step === 4 && (
          <>
            <h3>Review Your Details</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Date of Birth:</strong> {formData.dob}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>Username:</strong> {formData.username}</p>
            <p><strong>Chat Nickname:</strong> {formData.chatNickname}</p>
            <p><strong>Language:</strong> {formData.language}</p>
            <p><strong>Profile Visibility:</strong> {formData.visibility}</p>
            <p><strong>Notifications:</strong> {formData.notifications}</p>

            <button type="button" className="btn" onClick={handlePrevious}>Previous</button>
            <button type="submit" className="btn">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Register;
