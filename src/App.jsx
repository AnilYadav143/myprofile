import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="app-container">
      {/* Specify basename for routing on GitHub Pages */}
      <Router basename="/myprofile">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: Handle invalid routes */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
