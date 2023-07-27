import React from 'react';
import StudentBoughtCoursesProfile from '../componant/user-enrole-couse';
import Footer from '../componant/Footer';
import Header from '../componant/Header';

const StudentProfilesPage = () => {
  const studentData = [
    {
      studentName: 'John Doe',
      courses: ['Introduction to Web Development', 'Advanced JavaScript'],
    },
    {
      studentName: 'Jane Smith',
      courses: ['Data Science Fundamentals', 'Machine Learning 101'],
    },
    // Add more student data if needed
  ];

  return (
    <div>
        <Header></Header>
    <div className=' mx-10 my-10'>
      <h1 className="text-3xl font-bold text-center my-10">My Couse</h1>
      {studentData.map((student, index) => (
        <StudentBoughtCoursesProfile
          key={index}
          studentName={student.studentName}
          courses={student.courses}
        />
      ))}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default StudentProfilesPage;
