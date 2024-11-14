// About.jsx
import React from 'react';
import aboutImage from '../assets/images/about.png'; // Replace with the path to your image

const About = () => {
  return (
    <div className="about-page p-8">
      <h2 className="font-bold text-3xl text-center mb-8">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px]">
        
        {/* First Grid: Text Section */}
        <div className="bg-green-100 p-6 flex items-center justify-center">
          <div>
            <h3 className="font-bold text-2xl mb-4">Who We Are</h3>
            <p className="text-gray-700">
              I am an enthusiastic web developer with a rich experience in website and product design. 
              I specialize in creating seamless digital experiences and effective design solutions for clients.
            </p>
          </div>
        </div>

        {/* Second Grid: Image Section */}
        <div className="bg-green-200 flex items-center justify-center">
          <img 
            src={aboutImage} 
            alt="About Us Image" 
            className="h-[80%] w-auto object-cover rounded-md" 
          />
        </div>
        
      </div>
    </div>
  );
};

export default About;
