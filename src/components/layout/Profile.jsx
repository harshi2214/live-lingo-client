import React, { useState, useEffect } from "react";
import {
  FaUser, FaEnvelope, FaLock, FaPhone, FaTransgender, FaBirthdayCake,
  FaUserShield, FaComments, FaCogs, FaInfoCircle, FaCalendarPlus,
  FaSignInAlt, FaHistory, FaLanguage, FaClock
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData(storedUser);
    }
  }, []);

  const toggleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const saveChange = (field) => {
    setUser({ ...user, [field]: formData[field] });
    toggleEdit(field);
    const updatedUser = { ...user, [field]: formData[field] };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const renderField = (label, field, Icon, type = "text", masked = false) => (
    <div className="profile-field">
      <label>
        <Icon className="icon" style={{ color: "#4A90E2" }} /> <strong>{label}:</strong>
      </label>
      {editMode[field] ? (
        <>
          <input
            type={type}
            value={formData[field] || ""}
            onChange={(e) => handleChange(e, field)}
          />
          <button className="btn save" onClick={() => saveChange(field)}>Save</button>
          <button className="btn cancel" onClick={() => toggleEdit(field)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{masked ? "••••••••" : user[field] || "Not provided"}</span>
          <button className="btn edit" onClick={() => toggleEdit(field)}>Edit</button>
        </>
      )}
    </div>
  );

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      {renderField("Username", "username", FaUser)}
      {renderField("Email", "email", FaEnvelope, "email")}
      {renderField("Password", "password", FaLock, "password", true)}
      {renderField("Phone Number", "phone", FaPhone)}
      {renderField("Gender", "gender", FaTransgender)}
      {renderField("Date of Birth", "dob", FaBirthdayCake, "date")}
      {renderField("User Role", "role", FaUserShield)}
      {renderField("Chat Preferences", "chatPreferences", FaComments)}
      {renderField("Account Settings", "accountSettings", FaCogs)}
      {renderField("Bio", "bio", FaInfoCircle)}
      {renderField("Created At", "createdAt", FaCalendarPlus)}
      {renderField("Last Login", "lastLogin", FaSignInAlt)}
      {renderField("Total Logins", "totalLogins", FaHistory)}
      {renderField("Preferred Language", "language", FaLanguage)}
      {renderField("Timezone", "timezone", FaClock)}
    </div>
  );
};

export default Profile;
