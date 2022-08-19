import { React, useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { headStarterLogo, googleLogo } from '../images/imageindex';

// login page component, currently supports google auth
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // if user is logged in, go to homepage, check this whenever user variable is modified
  useEffect(() => {
    if (user != null) {
      navigate('/');
      // navigate('/account');
    }
  }, [user]);

  return (
    <div className='loginPage'>
      <div className='loginSection'>
        <div><img className='headStarterLogo' src={headStarterLogo} /></div>
        <h2>Welcome back!</h2>
        <button className='googleBtn' onClick={handleGoogleSignIn}>
          <img className='googleLogo' src={googleLogo} />
          Sign in with Google
        </button>

        <div className='loginSeparator'>
          <div className='sepLine1' />
          or Sign in with Email
          <div className='sepLine2' />
        </div>

        <label><strong>Email</strong></label>
        <input placeholder='name@headstarter.com' type='email' />

        <label><strong>Password</strong></label>
        <input placeholder='name@headstarter.com' type='password' />

        <button className='loginBtn'>
          Sign In
        </button>

      </div>
    </div>
  )
}
