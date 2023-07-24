import React from 'react';
import ContactUs from '../componant/ContactUs';
import Header from '../componant/Header';
import Footer from '../componant/Footer';

const ContactUsPage = () => {
  return (
    <div>
        <Header></Header>
    <div className="mx-10 my-10">
      <h1 className="text-4xl font-bold text-center my-5">Contact Us</h1>
      <p className="text-center my-3">
        Have questions, suggestions, or feedback? Contact us using the form below:
      </p>
      <ContactUs />
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ContactUsPage;
