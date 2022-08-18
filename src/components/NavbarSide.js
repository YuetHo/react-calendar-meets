import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

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
        <Link to='/'> <button>Home</button> </Link>
        <Link to='/calendar'> <button>Calendar</button> </Link>
        <Link to='/meets'> <button>Meets</button> </Link>
        <button className='logoutBtn' onClick={handleSignOut}>Logout</button>
      </div>
    </nav>
  )
}
