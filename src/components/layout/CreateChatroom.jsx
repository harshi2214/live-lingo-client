import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateChatroom = () => {
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState({
    name: "",
    description: "",
    isPrivate: false,
    language: "",
    maxParticipants: 10,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoomData({
      ...roomData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://user-management-server-3.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      });

      const result = await response.json();
      console.log("Server Response:", result); // For debugging

      if (response.ok && result.id) {
        // Navigate to chatroom page with the new ID
        navigate(`/chatroom/${result.id}`, { state: result });
      } else {
        alert(result.message || "Failed to create chatroom.");
      }
    } catch (err) {
      console.error("Error creating chatroom:", err);
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className="chatroom-form-container">
      <h2>Create a Chatroom</h2>
      <form className="chatroom-form" onSubmit={handleSubmit}>
        <label>Chatroom Name</label>
        <input
          type="text"
          name="name"
          value={roomData.name}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={roomData.description}
          onChange={handleChange}
        />

        <label>Preferred Language</label>
        <input
          type="text"
          name="language"
          value={roomData.language}
          onChange={handleChange}
        />

        <label>Max Participants</label>
        <input
          type="number"
          name="maxParticipants"
          value={roomData.maxParticipants}
          onChange={handleChange}
          min="2"
          max="100"
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="isPrivate"
            checked={roomData.isPrivate}
            onChange={handleChange}
          />
          Make this chatroom private
        </label>

        <button type="submit" className="btn-create">Create Chatroom</button>
      </form>
    </div>
  );
};

export default CreateChatroom;
