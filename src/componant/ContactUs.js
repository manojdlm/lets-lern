import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, e.g., sending the data to a server or API
    console.log('Form submitted:', name, email, message);

    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
