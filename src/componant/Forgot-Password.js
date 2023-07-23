import React, { useState } from 'react';
import ForgotPasswordImg from '../images/Registar.png';
import Header from './Header';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for resetting password here
    console.log('Password reset email sent to:', email);
  };

  return (
    <div> <Header></Header>
      <div className='grid grid-cols-2 mx-14'>
      <div className='my-24'>
        <h1 className='font-semibold text-4xl pt-5'>Forgot Password</h1>
        <p className='font-light pt-5 pr-40'>
        Enter the email associated with your account and we'll send an email with instructions to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='py-2'>
            <h1 htmlFor='email'>Email:</h1>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded border border-black px-8 py-1'
            />
          </div>
          <button type='submit' className='px-4 py-1 mt-2 rounded-md bg-purple-500 text-gray-50'>
            Reset Password
          </button>
        </form>
      </div>
      <div>
        <img className='' src={ForgotPasswordImg} alt='Forgot Password Image' />
      </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
