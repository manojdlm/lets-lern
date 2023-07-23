import React, { useState } from 'react';
import Loginimg from '../images/login.png'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Header from './Header';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', email, password);
  };

  const handleGoogleLogin = () => {
    // Perform Google login logic
  };

  const handleGitHubLogin = () => {
    // Perform GitHub login logic
  };
  return (
 <div>  <Header></Header>
    <div className=' grid grid-cols-2   mx-14'>
    <div className=' my-24'>
        <h1 className='  font-semibold text-4xl  pt-5'>Login</h1>
        <p className=' font-light pt-5 '>Don’t have an account? <a  href='/registar' className=' font-semibold'> Register Now</a> </p>
        <form onSubmit={handleSubmit}>
            <div className='  py-2 '>
                <h1 htmlFor="email">Email:</h1>
                <input className=' rounded border border-black px-8 py-1'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div >
            <div className='  py-2 '>
                <h1 htmlFor="password" className=''>Password:</h1>
                <input className='border rounded border-black px-8 py-1'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p className=' font-thin'   >Forget password?  <a className=' font-semibold' href='/foreget-password'>Click Here</a></p>
            <Link to ="/user-profile">
            <button type="submit" className=' px-4 py-1 mt-2  rounded-md bg-purple-500 text-gray-50'>Login</button>
            </Link>
            <div className=' gap-2 py-4  my-10'>
            <button onClick={handleGoogleLogin} className=' px-2 py-2 border rounded border-black  font-serif '>  <FaGoogle className=' w-20 h-6' />Login with Google</button>
            <span className=' mx-1'></span>
            <button onClick={handleGitHubLogin} className=' px-2 py-2 border rounded border-black   font-serif'> <FaGithub className=' w-20 h-6'  />Login with GitHub</button>
            </div>
        </form>



    </div>

    <div>
        <img className=' ' src={Loginimg}></img>
    </div>
 
    </div>
</div> 
  );
}

export default Login;
