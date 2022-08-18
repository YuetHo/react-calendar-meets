import React from 'react'
import { UserAuth } from '../context/AuthContext';

export default function HomePage() {
  const { user } = UserAuth();

  return (
    <div>
      HomePage
      <p>Welcome, {user ? user.displayName : 'User'}</p>
    </div>
  )
}
