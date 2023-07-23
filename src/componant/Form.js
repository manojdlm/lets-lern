import react from 'react';

function Form (){
        return (
            <div>
                 <h1>Let's get this show started </h1>
                 <h1>Add a few basic details to set up a personalised experience</h1>

                 <div className='  py-2 '>
                <h1 htmlFor="password" className=''>Enatre your social profile</h1>
                <input className='border rounded border-black px-8 py-1'/>
                </div>

                <div className='  py-2 '>
                <h1 htmlFor="password" className=''>What brings you here today?</h1>
                <input className='border rounded border-black px-8 py-1'/>
                </div>
            </div>
       
  );
}