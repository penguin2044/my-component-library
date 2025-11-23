import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import Skills from './pages/skills';
import Resources from './pages/resources';
import DevSetup from './pages/devsetup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <div className="nav-container">
            <h2 className="nav-brand">Jesse Kleinschmit</h2>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/work">Work</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/devsetup">Dev Setup</Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/devsetup" element={<DevSetup />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2025 Jesse Kleinschmit | Full Stack Web Developer</p>
          <p>Red River College Polytech</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;