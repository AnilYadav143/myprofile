import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Optional: for styling
import img from '../assets/images/logo.jpg';

const Header = () => {
    return (
        <header className="header">
            <nav className='flex items-center justify-between bg-green-700 text-white p-2 shadow-2xl'>
                {/* Left Logo */}
                <div className='flex items-center'>
                    <img src={img} alt="Logo" className='h-8' /> {/* Adjust the height as needed */}
                </div>

                {/* Right Menu Items */}
                <ul className='flex space-x-16'>
                    <li><Link to="/" className='hover:bg-gray-400 hover:text-white py-2 px-4 rounded transition duration-300 ease-in-out'>Home</Link></li>
                    <li><Link to="/about" className='hover:bg-gray-400 hover:text-white py-2 px-4 rounded transition duration-300 ease-in-out'>About</Link></li>
                    <li><Link to="/contact" className='hover:bg-gray-400 hover:text-white py-2 px-4 rounded transition duration-300 ease-in-out'>Contact</Link></li>
                </ul>
            </nav>



        </header>
    );
};

export default Header;