import React, { useEffect, useState } from "react";
import API from "../api";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users")
      .then((res) => setUsers(res.data))
      .catch(() => alert("Access denied or error"));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Admin Panel</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.userName} - {u.email} - ({u.role})</li>
        ))}
      </ul>
    </div>
  );
}
