import React from 'react'
import { Link, NavLink  } from 'react-router-dom';
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
        <NavLink to='/' className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <button>
            <img className='navIcons' src={homeIcon} />
          </button>
        </NavLink>
        <NavLink to='/calendar' className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <button>
            <img className='navIcons' src={calendarIcon} />
          </button>
        </NavLink>
        <NavLink to='/meets' className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <button>
            <img className='navIcons' src={videoCallIcon} />
          </button>
        </NavLink>
        <button className='logoutBtn' onClick={handleSignOut}>
          <img className='navIcons' src={logOutIcon} />
        </button>
      </div>
    </nav>
  )
}
