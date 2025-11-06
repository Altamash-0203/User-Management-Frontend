import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/login";
import Signup from "../Components/signup";
import Dashboard from "../Components/dashboard";
import Profile from "../Components/profile";
import AdminPanel from "../Components/adminPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}
