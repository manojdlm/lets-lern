import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ title, instructor, duration, image }) {
 
 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-20 px-10 gap-2  border-inherit grid">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{instructor}</p>
        <p className="text-gray-700 text-base">{duration}</p>
        <Link to='/couse-enrol'>
        <button className='py-2 px-3 bg-violet-600 rounded-md text-white my-2 ' >view details </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
