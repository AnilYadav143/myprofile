import { useState } from 'react'
import myimg from './assets/images/myimg.jpeg';
import linkdin from './assets/images/linkdin.png';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      

      <Footer />
    </div>
  )
}

export default App
