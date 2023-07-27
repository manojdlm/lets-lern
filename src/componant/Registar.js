import React, { useState } from 'react';
import Registerimg from '../images/Registar.png';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Header from './Header';
import { Link } from 'react-router-dom';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted:', fullName, email, password);
  };

  const handleGoogleLogin = () => {
    // Perform Google login logic
  };

  const handleGitHubLogin = () => {
    // Perform GitHub login logic
  };

  return (
    <div > <Header></Header>
    <div className='grid grid-cols-2 mx-14'>
      <div className='my-10'>
        <h1 className='font-semibold text-4xl pt-5 '>Register</h1>
        <h1 className=' font-mono pt-2 pb-7'>Already have an account? <a href='/login'  className=' font-semibold'>Login Now</a></h1>
        <form onSubmit={handleSubmit}>
          <div className='py-2'>
            <h1 htmlFor="fullName">Full Name:</h1>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='rounded border border-black px-8 py-1'
            />
          </div>
          <div className='py-2'>
            <h1 htmlFor="email">Email:</h1>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded border border-black px-8 py-1'
            />
          </div>
          <div className='py-2'>
            <h1 htmlFor="password">Password:</h1>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded border border-black px-8 py-1'
            />
          </div>
          <div className='py-2'>
            <h1 htmlFor="confirmPassword">Confirm Password:</h1>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='rounded border border-black px-8 py-1'
            />
          </div>
          <Link to="/user-profile">
          <button type="submit" className='px-4 py-1 mt-2 rounded-md bg-purple-500 text-gray-50'>Register</button>
          </Link>
          <div className='gap-2 py-4 pt-10'>
            <button onClick={handleGoogleLogin} className='px-2 py-2 border rounded border-black font-serif'>
              <FaGoogle className='w-20 h-6' /> Login with Google
            </button>
            <span className='mx-1'></span>
            <button onClick={handleGitHubLogin} className='px-2 py-2 border rounded border-black font-serif'>
              <FaGithub className='w-20 h-6' /> Login with GitHub
            </button>
          </div>
        </form>
      </div>
      <div className=' '>
        <img className='' src={Registerimg} alt="Registration Image" />
      </div>
    </div>
    </div>
  );
}

export default Register;
