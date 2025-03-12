import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      fetch(`https://user-management-server-3.onrender.com/users/${storedUser.id}`)  // Replace with your Render API URL
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Profile Page</h2>
      <img src={user.profileImage} alt="Profile" width="150" />
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default Profile;
