import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavbarTop = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {user ? (
        <button onClick={handleSignOut}
        >Logout</button>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  );
};

export default NavbarTop;