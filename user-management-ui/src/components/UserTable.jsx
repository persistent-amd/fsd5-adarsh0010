import React from "react";

export default function UserTable({ users, onEdit, onDelete, onToggleStatus }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id.slice(0, 6)}</td>
            <td>{user.name}</td>
            <td>{user.contact}</td>
            <td>{user.email}</td>
            <td>
  <span className={`badge ${user.status === "Active" ? "active" : "inactive"}`}>
    {user.status}
  </span>
</td>
            <td>
  <button className="action-btn" onClick={() => onEdit(user)}>Edit</button>
  <button className="action-btn" onClick={() => onDelete(user.id)}>Delete</button>
  <button className="action-btn" onClick={() => onToggleStatus(user.id)}>
    Toggle
  </button>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}