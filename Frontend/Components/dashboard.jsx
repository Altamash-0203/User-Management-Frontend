import React, { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    API.get("/resource")
      .then((res) => setResources(res.data))
      .catch(() => alert("Error fetching resources"));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dashboard</h2>
      <p><a href="/profile">Edit Profile</a> | <a href="/admin">Admin Panel</a></p>
      <ul>
        {resources.map((r, i) => (
          <li key={i}>{r.tittle}: {r.description}</li>
        ))}
      </ul>
    </div>
  );
}
