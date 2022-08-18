import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { calendarIcon, homeIcon, logOutIcon, videoCallIcon } from '../images/imageindex';

// side nav bar component
export default function NavbarSide() {

  const { user, logOut } = UserAuth();

  // handler for logout button
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='navBarSide'>
      <div className='navBarLinks'>
        <Link to='/'>
          <button>
            <img className='navIcons' src={homeIcon} />
          </button>
        </Link>
        <Link to='/calendar'>
          <button>
            <img className='navIcons' src={calendarIcon} />
          </button>
        </Link>
        <Link to='/meets'>
          <button>
            <img className='navIcons' src={videoCallIcon} />
          </button>
        </Link>
        <button className='logoutBtn' onClick={handleSignOut}>
          <img className='navIcons' src={logOutIcon} />
        </button>
      </div>
    </nav>
  )
}
