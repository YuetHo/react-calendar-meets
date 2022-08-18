import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

// put webpage component inside Protected element to block access to page if not user
const Protected = ({ children }) => {
  const { user } = UserAuth();

  // redirect to login if not auth user
  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default Protected;