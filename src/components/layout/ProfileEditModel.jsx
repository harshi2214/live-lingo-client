import React, { useState, useEffect } from "react";

const ProfileEditModal = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
    bio: ""
  });

  useEffect(() => {
    fetch("https://user-management-server-3.onrender.com/users") // Replace with your Render API URL
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://user-management-server-3.onrender.com/users", {
      method: "PUT", // Update user details
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Profile updated successfully!");
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="profileImage"
          value={user.profileImage}
          onChange={handleChange}
          placeholder="Profile Image URL"
        />
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          placeholder="Bio"
        ></textarea>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEditModal;
