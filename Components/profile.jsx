import React, { useState } from "react";
import API from "../api";

export default function Profile() {
  const [form, setForm] = useState({ userName: "", email: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put("/users/profile", form);
      alert("Profile updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdate}>
        <input name="userName" placeholder="Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
