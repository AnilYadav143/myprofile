import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-900 text-white p-8 mt-4">
      {/* Three-column grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Get in Touch Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
          <p>Contact us at:</p>
          <p>Email: samyaduvanshi26@gmail.com</p>
          <p>Phone: **********</p>
        </div>
        
        {/* Social Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Social</h3>
          <p>Follow us on:</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
        
        {/* Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Service</h3>
          <p>Explore our services:</p>
          <p>Web Development</p>
          <p>Design</p>
          <p>API Development</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
