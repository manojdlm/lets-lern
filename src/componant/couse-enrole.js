import React, { useState } from 'react';
import Cosepricecard from './couse-price-card';

function CourseEnrollment() {

  return (
    <div className=' mx-16 my-16'>
        <div className='grid grid-cols-2'>
            <div className=' col-1'>
                <div>
                <h1 className=' text-4xl font-semibold my-1'>Website Design</h1>
                <div ></div>
                <div className=' py-1 bg-black'></div>
                <p className=' font-mono mt-4 '>Proven management tactics for leading high-impact teams. Minus the messy mistakes of trial and error.</p>
                <button className=' bg-violet-400 rounded-md text-white px-2 py-2 my-5'>Enroll Now</button>
                </div>

                <div className=' grid  grid-cols-2'>
                    <h1 className='  text-lg '>HOSTED BY</h1>
                    <img src=''></img>
                    <h3 className=' font-medium'>Dave Kline</h3>
                    <p className=' font-thin'>20+ years experience leading high-performing divisions at Bridgewater & Moody's</p>
                </div>

                <div className=' py-2 my-3'>
                    <h2 className=' font-semibold my-2'>COURSE OVERVIEW</h2>
                    <p className=' font-normal '>Develop your Management OS's CODE (Coach, Operate, Delegate & Engage).
                    Refine your leadership Decision-Making System tailored to your individual approach.
                    Leave with an Engaged Community of 300+ Peers in lockstep on their management journey.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 mt-10'>
                <div>
                    <Cosepricecard></Cosepricecard>
                </div>

            </div>

        </div>
    </div>
  );
}

export default CourseEnrollment;
