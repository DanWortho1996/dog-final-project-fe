import {useEffect, useState} from 'react';
import UserListContainer from '../../components/userListContainer/UserListContainer';
import { allUsersFetch } from '../../utils/fetch';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch();
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
    <UserListContainer />
  )
}

export default UserListPage;