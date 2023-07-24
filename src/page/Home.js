import React from 'react';
import Header from '../componant/Header';
import Aboutimg from '../images/about.png'
import Footer from '../componant/Footer';
import TestimonialSection from '../componant/Testorminal';
import CourseCard from '../componant/cousecard';
import CoursDtils from '../componant/Course-Detils';


function Home() {
    return (
      <div>
     <Header></Header>
     <div className=' my-10 '>
        <h1 className='  font-Archivo text-center text-gray-900  leading-none  text-5xl pt-10 pb-5 '>The best way to learn</h1>
        <p className=' text-center p-2 font-Archivo px-56'>Go step-by-step through our unique courses. Assess what you've learned with in-lesson quizzes, 
            and gradually advance your skills with practice.</p>
        <p className=' text-center font-Archivo py-2'>Courses designed by experts with real-world practice. Join our global community. It's free.</p>
        <button className=' block mx-auto  bg-blue-500  py-2 px-2 my-4   text-white rounded-md'>Start learning now!</button>
     </div>

     <div className=''>
        <div className=' grid grid-cols-2 gap-10 px-10'>
          <div>
            <h1 className=' text-3xl pb-5  font-bold'>
              About Us
            </h1>
            <h2 className='text-2xl font-semibold font-Archivo pb-2'>
            Learn from 
            </h2>
            <h2 className='text-2xl font-semibold font-Archivo pb-2'>
             Anywhere at anytime
            </h2>
            <p className='  font-Archivo'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr.
            </p>

            <p className=' mt-5 font-Archivo'>
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr.
            </p>

            <button className=' bg-blue-500  py-2 px-2 text-white mt-5 rounded-md' >  Read More</button>
      

          </div>
          <div className=' '>
            <img  className='  w-2/3  h-full' src={Aboutimg} alt="Description of the image">
            </img>
          </div>

        </div>

     </div>
     <div>
        <div className='grid col-4 row-span-1'>
          <CoursDtils></CoursDtils>
        </div>
     </div>
          <div className=' grid grid-cols-2 my-16 mx-10'> 
            <div className='grid-col-2'>
              <h1>Get the skills you need for a job that is in demand</h1>
              <div>
              <h1>Leadership</h1>
              <h2>Fully committed to the success company</h2>
              </div>
            </div>

            <div>
              <p>The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
            
            </div>

          </div>

        <div className='px-10 py-10' >
          <h1 className=' text-center mt-2 text-3xl font-bold'>offerd builds</h1>
          <h1 className=' text-center mt-2 text-2xl font-semibold' >oure offerd builds</h1>
          <div>

          </div>
        </div>
        <div className='Testormonial'>
          <TestimonialSection></TestimonialSection>
        </div>

        <div className='footer'>
        <Footer></Footer>
        </div>

        


      </div>
    );
  }
  
  export default Home;
