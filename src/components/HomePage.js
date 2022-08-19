import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { user } = UserAuth();

  return (
    <div className='homePage'>
      <span className='homeGreeting'>Welcome back, {user ? user.displayName : 'User'}!</span>
      <Link to='/meets'>
        <button className='homeMeetingBtn'>New Meeting</button>
      </Link>
      <div className='homeTasksContainer'>
        <div className='topTaskSection'>
          <strong>Upcoming Tasks</strong>
          <button>+ Add Task</button>
        </div>
      </div>

    </div>
  )
}
