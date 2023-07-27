import React from 'react';
import Teachers from '../componant/Teachers';
import Headers from '../componant/Header'
import Footer from '../componant/Footer'

const TeachersPage = () => {
  return (
    <div>
      <Headers></Headers>
      <h1 className="text-3xl font-bold text-center my-10">Teachers Page</h1>
      <Teachers />
      <Footer></Footer>
      
    </div>
  );
};


export default TeachersPage;
