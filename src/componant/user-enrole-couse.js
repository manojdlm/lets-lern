
import React from 'react';

const StudentBoughtCoursesProfile = ({ studentName, courses }) => {
  return (
    <div className="border border-gray-300 p-4 my-4">
      <h1 className="text-xl font-semibold mb-4">{studentName}'s Bought Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentBoughtCoursesProfile;
