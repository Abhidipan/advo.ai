// src/pages/HomePage.jsx
import React, { useState } from 'react';
import LeftSideNavbar from '../components/LeftSideNavbar';
import LeftMenubar from '../components/LeftMenubar';
import Main from '../components/Main';
import './HomePage.css'; // Import the styles

function HomePage() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
    // You can apply additional logic to update other components or storage based on the theme change
  };

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <LeftSideNavbar onButtonClick={handleButtonClick} onThemeToggle={handleThemeToggle} />
      <LeftMenubar onButtonClick={handleButtonClick} selectedButton={selectedButton} />
      <Main selectedButton={selectedButton}/>
    </div>
  );
}

export default HomePage;
