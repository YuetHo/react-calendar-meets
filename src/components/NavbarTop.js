import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavbarTop = () => {
  // const { user, logOut } = UserAuth();

  // const handleSignOut = async () => {
  //   try {
  //     await logOut()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <nav className='navBarTop'>
      <div>
        {/* {user ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to='/login'>Login</Link>
        )} */}

        
      </div>
    </nav>
  );
};

export default NavbarTop;