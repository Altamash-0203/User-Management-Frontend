import React, { useState } from "react";
import API from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signin", form);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
      <p><a href="/signup">New user? Signup</a></p>
    </div>
  );
}
