import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import Family from './components/Family';
import Education from './components/Education';
import logo from './logo.svg'; 

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'hobbies':
        return <Hobbies />;
      case 'family':
        return <Family />;
      case 'education':
        return <Education />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      
      <header>
        <h1>
          Assignment 1 using{' '}
          <img src={logo} alt="React Logo" className="react-logo" />
        </h1>
      </header>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <button
              onClick={() => setActiveSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('hobbies')}
              className={activeSection === 'hobbies' ? 'active' : ''}
            >
              Hobbies
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('family')}
              className={activeSection === 'family' ? 'active' : ''}
            >
              Family
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('education')}
              className={activeSection === 'education' ? 'active' : ''}
            >
              Education
            </button>
          </li>
        </ul>
      </nav>

      
      <div className="content">{renderSection()}</div>
    </div>
  );
}

export default App;
