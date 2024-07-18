// src/components/LeftSidebar.jsx
import React from 'react';
import LeftSideNavbar from './LeftSideNavbar'; // Adjust the import path
import './LeftSidebar.css'; // Import the styles

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <LeftSideNavbar />
    </div>
  );
}

export default LeftSidebar;
