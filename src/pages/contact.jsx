import React from 'react';
import phoneImg from '../assets/images/phone.png'; // Adjust path as needed
import contactImg from '../assets/images/contact.png';

const Contact = () => {
  return (
    <div className="contact-page p-4">
      <h2 className="text-center text-3xl mb-4 font-bold">
        <span className="inline-block border-b-4 border-green-700 shadow-lg pb-1">
            Contact Us
        </span>
      </h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* Grid for Phone Image */}
        <div className="flex justify-center items-center h-96 bg-green-100 rounded-lg">
          <img src={phoneImg} alt="Phone Contact" className="h-3/4" />
        </div>

        {/* Grid for Contact Image */}
        <div className="flex justify-center items-center h-96 bg-green-100 rounded-lg">
          <img src={contactImg} alt="Email Contact" className="h-3/4" />
        </div>
      </div>

      {/* Contact Details Row */}
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <i className="fa fa-phone text-green-700 text-2xl"></i>
          <span className="text-lg font-medium">9120313518</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <i className="fa fa-envelope text-green-700 text-2xl"></i>
          <span className="text-lg font-medium">samyaduvanshi26@gmail.com</span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-2">
          <i className="fa fa-linkedin text-green-700 text-2xl"></i>
          <a href="https://www.linkedin.com/in/anil-yadav-940322207/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
