import React, { useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: uuidv4(), status: "Active" }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const searchUser = (id) => {
    const result = users.filter(u => u.id.includes(id));
    setFilteredUsers(result);
  };

  const toggleStatus = (id) => {
    setUsers(users.map(u =>
      u.id === id
        ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
        : u
    ));
  };

  const displayUsers = filteredUsers.length ? filteredUsers : users;

  return (
    <div className="container">
      <SearchBar onSearch={searchUser} />
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <UserTable
        users={displayUsers}
        onEdit={setEditingUser}
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
}