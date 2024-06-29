import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Adjust the path as needed

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout(); // Call logout function from AuthContext
      // Redirect or handle logout success
    } catch (error) {
      // Handle logout error
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
