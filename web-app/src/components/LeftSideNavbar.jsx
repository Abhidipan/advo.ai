// src/components/LeftSideNavbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function LeftSideNavbar({ onButtonClick, onThemeToggle }) {
  const navigate = useNavigate();

  const {user, logoutUser} = useAuth()
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    onButtonClick(buttonIndex);
  };

  const handleThemeToggle = () => {
    onThemeToggle();
  };

  return (
    <div className="left-side-navbar">
      {/* Add content for LeftSideNavbar */}
      <div className="advocate">
      <a href="https://advo-ai.pages.dev/"><img src="https://advo-login.pages.dev/img/loginImg.png" alt="advocate.ai logo" /></a>
      {/* <h1>advocate.ai</h1>   */}
      </div>
      <div className="buttons">
        {/* <button onClick={() => handleButtonClick(1)}>
            <img src="/chatIcon.png" alt="" />
        </button>
        <button onClick={() => handleButtonClick(2)}>
        <img src="/documentIcon.png" alt="" />
        </button> */}
        {/* <button onClick={() => handleButtonClick(3)}>
        <img src="/profileIcon.png" alt="" />
        </button> */}
      </div>
      <div className="settings">
        <div className="dark-mode-toggle">
        <label className="switch">
    <input type="checkbox" onChange={handleThemeToggle}/>
    <span className="slider"></span>
</label>
        </div>
      </div>
    </div>
  );
}

export default LeftSideNavbar;
