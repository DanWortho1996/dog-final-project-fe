import React, { useState, useEffect } from 'react';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user? This action cannot be undone.');

    if (confirmed) {
      try {
        const response = await fetch(`/api/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (response.ok) {
          alert('User deleted successfully');
          setUsers(users.filter(user => user._id !== userId));
        } else {
          alert('Failed to delete user. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
            <button onClick={() => handleDeleteUser(user._id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;