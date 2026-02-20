import React, { useState, useEffect } from "react";

export default function UserForm({ addUser, updateUser, editingUser }) {
  const [user, setUser] = useState({
    name: "",
    contact: "",
    email: ""
  });

  useEffect(() => {
    if (editingUser) setUser(editingUser);
  }, [editingUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.contact || !user.email) return;

    if (user.id) updateUser(user);
    else addUser(user);

    setUser({ name: "", contact: "", email: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        name="contact"
        placeholder="Contact Number"
        value={user.contact}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <button type="submit">
        {user.id ? "Update User" : "Add User"}
      </button>
    </form>
  );
}