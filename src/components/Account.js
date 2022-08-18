import { React } from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user } = UserAuth();

  return (
    <div>
      <h1>Account</h1>
      <div>
        <p>Welcome, {user?.displayName ? user.displayName : 'User'}</p>
      </div>
    </div>
  );
};

export default Account;