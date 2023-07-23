import React from 'react';

function CoursePriceCard ()  {
  return (
    <div className='border-solid border-2 border-black p-4  mx-24'>
      <div className='grid grid-cols-2 gap-4  my-10'>
        <div>
          <h1 className='text-2xl  font-semibold'>224 USD</h1>
        </div>
        <div>
          <h1 className='text-2xl   font-normal'>Rating: 3/4</h1>
        </div>
      </div>
      <div className='mt-4 gap-2'>
        <h1 className='text-md  mt-2 font-bold'>Get reimbursed by your employer</h1>
        <h2 className='text-md mt-2 font-semibold'>UPCOMING COHORT</h2>
        <p className=' text-sm mt-2'>May 2 - 25, 2023</p>
        <p className='text-sm mt-2'>Last day to enroll: May 2, 2023</p>
        <button className='px-4 py-2 my-2  bg-violet-600 text-white hover:bg-blue-600 rounded'>
          Enroll Today
        </button>

        <h1 className='mt-4 text-start font-bold'>CAN'T JOIN THIS TIME?</h1>
        <h3 className=' font-semibold'>
          Stay in the loop about future cohorts
        </h3>
        <input
          type='email'
          placeholder='Enter your email'
          className='border-2 border-gray-300 px-4 py-2 rounded-md w-full mt-2'
        />
      </div>
    </div>
  );
};

export default CoursePriceCard;

