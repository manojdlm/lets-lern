import React from 'react';
import CourseCard from './cousecard';
import Couseone from '../images/couse1.jpg'
import Cousetwo from '../images/couse2.jpg'
import Cousethree from '../images/couse3.jpg'

function CoursDtils() {
  const courseData = [
    {
      title: "Introduction to Web Development",
      instructor: "John Smith",
      duration: "6 weeks",
      image: Couseone,
    },
    {
      title: "Advanced JavaScript",
      instructor: "Jane Doe",
      duration: "4 weeks",
      image: Cousetwo,
    },

    {
      title: "JavaScript",
      instructor: "Jane Doe",
      duration: "4 weeks",
      image: Cousethree,
    },
    
    {
      title: "Introduction to Web Development",
      instructor: "John Smith",
      duration: "6 weeks",
      image: Couseone,
    },
    {
      title: "Advanced JavaScript",
      instructor: "Jane Doe",
      duration: "4 weeks",
      image: Cousetwo,
    },

    {
      title: "JavaScript",
      instructor: "Jane Doe",
      duration: "4 weeks",
      image: Cousethree,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Course Catalog</h1>
      <div className="grid grid-cols-4">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursDtils;
