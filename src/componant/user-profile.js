import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function UserProfile() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet.');
  const [isEditing, setIsEditing] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add your save logic here
    console.log('Profile saved:', firstName, lastName, email, bio);
    setIsEditing(false);
  };

  return (
    <div > <Header></Header> 
    <div className="mx-20 my-20" >
      <h2 className="text-2xl font-extrabold  text-center my-10">User Profile</h2>
      <ul className='flex gap-4 '>
        <li className=' font-normal border border-black px-1 py-2 rounded-md'>Profile</li>
        <li className='font-normal  border border-black px-1 py-2 rounded-md'>Settings</li>
        <li className='font-normal  border border-black px-1 py-2 rounded-md'>My Couse</li>
      </ul>
      <form>
        <div className="my-4">
          <h1 className="text-2xl font-semibold">First Name:</h1>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <h1 className="text-2xl font-semibold">Last Name:</h1>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <h1>Email:</h1>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <h1>Bio:</h1>
          <textarea
            id="bio"
            value={bio}
            onChange={handleBioChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          ></textarea>
        </div>
        {isEditing ? (
          <button
            disabled
            className="px-4 py-2 bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
          >
            Edit
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 ml-2"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default UserProfile;

