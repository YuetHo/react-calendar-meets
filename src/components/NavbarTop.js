import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { headStarterIcon, userProfileIcon } from '../images/imageindex';

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
      <div className='navLogo'>
        <img src={headStarterIcon} />
      </div>
      <div className='navUserProfile'>
        {/* {user ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to='/login'>Login</Link>
        )} */}
        <img src={userProfileIcon} />
      </div>
    </nav>
  );
};

export default NavbarTop;