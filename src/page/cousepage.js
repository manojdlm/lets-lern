import React from 'react';
import { useParams } from 'react-router-dom';
import CoursDtils from '../componant/Course-Detils';
import Header from '../componant/Header';
import SearchBar from '../componant/serchbar';
import Footer from '../componant/Footer';


function CoursePage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        <CoursDtils />
      </div>
        <Footer></Footer>
    </div>
  );
}

export default CoursePage;

