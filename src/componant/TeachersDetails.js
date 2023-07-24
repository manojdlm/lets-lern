import React from 'react';

const TeachersDetails = ({ name, email, subject, bio, profileImage, courses }) => {
  return (
    <div className="border border-gray-300 p-4 my-4">
      <div className="flex items-center">
        <img src={profileImage} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-gray-600">{subject}</p>
        </div>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Email:</h2>
        <p>{email}</p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Bio:</h2>
        <p>{bio}</p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Courses:</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeachersDetails;
