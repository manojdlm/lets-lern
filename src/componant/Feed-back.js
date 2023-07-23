import React, { useState } from 'react';

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setSubmitted(true);
  };

  return (
    <div className=' px-10 py-10'>
      <h2 className=' text-center font-extrabold text-2xl py-3'>Feedback</h2>
      {submitted ? (
        <p className=' text-lg font-extrabold text-center  '>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h1 htmlFor="feedback" className=' font-semibold text-2xl  text-center py-3 '>Your Feedback:</h1>
            <textarea 
            className='  rounded-md  border border-black px-10 py-5 mx-auto flex '
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
            />
          </div>
          <button type="submit" className=' font-semibold px-4 py-2  my-3 bg-violet-600 text-white mx-auto flex  rounded-md'>Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackComponent;
