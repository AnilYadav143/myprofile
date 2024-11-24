import React from 'react';
import myimg from '../assets/images/myimg.png';
import linkdin from '../assets/images/linkdin.png';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 h-auto">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left p-4">
          <h1 className="font-bold text-black text-4xl md:text-6xl">
            I'm Web Developer Anil Yadav
          </h1>
          <p>
            As a web developer, I build and maintain websites, ensuring smooth functionality and a great user experience through coding languages like PHP, Laravel,Codeigniter Mysql, Tailwind CSS, Jquery, Ajax and JavaScript etc.
          </p>
          <div className="flex items-center mt-4">
            <i className="fa fa-envelope text-gray-700 mr-2" aria-hidden="true"></i> {/* Email icon */}
            <span className="font-bold text-lg">Email:</span>
            <span className="text-gray-700 ml-2">samyaduvanshi26@gmail.com</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 p-4">
          <img
            src={myimg}
            alt="Anil Yadav's Image"
            className="
              w-32   /* Default for small screens */
              sm:w-48 /* Small screens (640px) */
              md:w-64 /* Medium screens (768px) */
              lg:w-72 /* Large screens (1024px) */
              xl:w-96 /* Extra large screens (1280px) */
              mx-auto md:mr-28"
          />
        </div>
      </div>
      {/* About Us Section */}
      <div className="bg-white p-4 mt-8 text-center">
        <h2 className="font-bold text-black text-3xl">
          About Us
        </h2>
        <p className="text-gray-700 text-lg mt-2 mx-28">
          I am an enthusiastic web developer based in India, with a rich experience of over 2.8+ years in website & product design.
        </p>
        <p>
          With years of experience in Development and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 mt-4 mx-36">
        {/* Left Side Heading */}
        <div className="flex-1 text-left p-4">
          <a
            href="https://www.linkedin.com/in/anil-yadav-940322207/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black text-2xl hover:text-blue-500"
          >
            My LinkedIn Profile
          </a>
          <p className='mt-2 text-gray-700'>
            https://www.linkedin.com/in/anil-yadav-940322207/
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 p-4">
          <img
            src={linkdin} // Replace with your new image
            alt="LinkedIn Logo"
            className="
              w-32   /* Default for small screens */
              sm:w-16 /* Small screens (640px) */
              md:w-22 /* Medium screens (768px) */
              lg:w-32 /* Large screens (1024px) */
              xl:w-52 /* Extra large screens (1280px) */
              mx-auto 
              rounded-full /* Makes the image circular */
              shadow-lg /* Adds a shadow */
              shadow-sky-800 /* Sets shadow color to sky blue */"
          />
        </div>

      </div>
      {/* New Skills and Experience Section */}
      <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-4 mt-4 mx-36">
        {/* Skills Box */}
        <div className="flex-1 bg-white p-4 m-2 rounded-lg shadow-lg">
          <h3 className="font-bold text-black text-2xl">Skills</h3>
          <p className="text-gray-700 mt-2">
            Proficient in HTML, CSS, JavaScript, PHP, Laravel, Codeigniter, MySQL, and Tailwind CSS, Ajax, Jquery, Basic React.
          </p>

          {/* Progress Bars */}
          <div className="mt-4">
            {/* PHP Progress Bar */}
            <div className="mb-2">
              <span className="font-bold">PHP</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>

            {/* Laravel Progress Bar */}
            <div className="mb-2">
              <span className="font-bold">Laravel</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>
            {/* Codeigniter Progress Bar */}
            <div className="mb-2">
              <span className="font-bold">Codeigniter</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>

            {/* JavaScript Progress Bar */}
            <div className="mb-2">
              <span className="font-bold">JavaScript</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>

            {/* Add more progress bars for other skills */}
            {/* Example for MySQL */}
            <div className="mb-2">
              <span className="font-bold">MySQL</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>

            {/* Example for Tailwind CSS */}
            <div className="mb-2">
              <span className="font-bold">Tailwind CSS</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>
            {/* Example for Github */}
            <div className="mb-2">
              <span className="font-bold">Github</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>
            {/* Example for Ajax */}
            <div className="mb-2">
              <span className="font-bold">Ajax</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>
            {/* Example for Jquery */}
            <div className="mb-2">
              <span className="font-bold">Jquery</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>
          </div>
          {/* React Progress Bar */}
          <div className="mb-2">
              <span className="font-bold">Basic React</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div> {/* Adjust percentage as needed */}
              </div>
            </div>
        </div>


        {/* Experience Box */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-bold text-black text-2xl">My Experience</h3>
          <p className="mt-5">
            <strong className="text-blue-700">Web Developer</strong> {/* Making "Web Developer" bold */}
            <br />
            I was responsible for all the in-house and client-based web development assignments. I take pride in having helped the best of clients and getting maximum ratings for the company.
          </p>
          <p className="mt-5">
            <strong className="text-blue-700">Developed Projects On -</strong> {/* Making "Web Developer" bold */}
            <br />
            <ul className='text-black-900 rounded-lg shadow-lg mt-4'>
              <li>* College Management Projects</li>
              <li>* Document Management Sites</li>
              <li>* NGO Sites</li>
              <li>* E-Commerce Sites</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Additional sections like About Us, Skills, Experience */}
    </div>
  );
};

export default Home;
