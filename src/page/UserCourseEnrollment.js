import React from 'react';
import { Link } from 'react-router-dom';

const UserCourseEnrollment = () => {
  // Sample course data
  const courseData = {
    title: "Introduction to Web Development",
    mainChapters: [
      { id: 1, title: "HTML Basics" },
      { id: 2, title: "CSS Fundamentals" },
      { id: 3, title: "JavaScript Essentials" },
    ],
    subChapters: [
      { id: 1, mainChapterId: 1, title: "Introduction to HTML" },
      { id: 2, mainChapterId: 1, title: "HTML Elements" },
      { id: 3, mainChapterId: 2, title: "Introduction to CSS" },
      { id: 4, mainChapterId: 2, title: "CSS Selectors" },
      { id: 5, mainChapterId: 3, title: "Introduction to JavaScript" },
      { id: 6, mainChapterId: 3, title: "Variables and Data Types" },
    ],
    progress: 50, // Assuming the progress is 50% for demonstration purposes
  };

  return (
    <div className="grid grid-cols-3 mx-20 my-20">
      <div className="border-2 border-black py-5 px-5 gap-2  grid-cols-1">
        <h1 className="text-center font-Archivo text-2xl">{courseData.title}</h1>
        <h2 className="font-Archivo my-2">Main Chapters:</h2>
        <ul className="font-Archivo my-2">
          {courseData.mainChapters.map((chapter) => (
            <li key={chapter.id}>{chapter.title}</li>
          ))}
        </ul>
        <h2 className="font-Archivo my-2">Sub Chapters:</h2>
        <ul className="font-Archivo my-2">
          {courseData.subChapters.map((chapter) => (
            <li key={chapter.id}>{chapter.title}</li>
          ))}
        </ul>
        <div>
          <h2>Course Progress: {courseData.progress}%</h2>
          <div className="w-full bg-gray-300 rounded-md">
            <div
              style={{ width: `${courseData.progress}%` }}
              className="bg-green-500 rounded-md h-5"
            />
          </div>
        </div>
      </div>
      <div className="grid col-span-2 ml-10">
        <video>
          {/* Add your video source */}
        </video>
        <h1 className=' text-2xl font-Archivo'> Website Design</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </div>
  );
};

export default UserCourseEnrollment;

