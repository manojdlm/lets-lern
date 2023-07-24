import React from 'react';

const Teachers = () => {
  // Dummy teacher data
  const teachersData = [
    {
      name: "John Smith",
      subject: "Web Development",
      experience: "5 years",
      bio: "John Smith is an experienced web developer...",
      image: "https://example.com/teacher1.jpg",
    },
    {
      name: "Jane Doe",
      subject: "JavaScript",
      experience: "3 years",
      bio: "Jane Doe is a passionate JavaScript developer...",
      image: "https://example.com/teacher2.jpg",
    },
    // Add more teacher objects as needed
  ];

  return (
    <div className="mx-10 my-10">
      <h1 className="text-4xl font-bold text-center my-5">Teachers</h1>
      <div className="grid grid-cols-2 gap-8">
        {teachersData.map((teacher, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{teacher.name}</h2>
            <p className="text-gray-600">{teacher.subject}</p>
            <p className="text-gray-600">Experience: {teacher.experience}</p>
            <p className="my-4">{teacher.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
