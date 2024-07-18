import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function Content1(onButtonClick) {
  const navigate = useNavigate();

  const {user, logoutUser} = useAuth()
  const [selectedButton, setSelectedButton] = useState(1);
  
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    onButtonClick(buttonIndex);
  };




  return (
    <div className='profile'>
      <h2 style={{textAlign: "center"}}>Profile</h2>
      <div className="profile-section">
      <div className="profile-icon-container">
          {/* Placeholder for circular profile icon */}
          <img src="/userIcon.png" alt="Profile" className="profile-icon" />
        </div>
        <div className="details-section">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      {/* <div className="location-section">
        <p>Your Location:</p>
        <p>{userLocation}</p>
        {/* Placeholder for map with pin point */}
        {/* Note: You can use a third-party map library if you need an interactive map */}
        {/* Alternatively, you can display a static map using a service like Mapbox or OpenStreetMap 
      </div> */}
      <div className='profileBtn-container'>
      <button className="editbtn">
          <div className='button-icon'>
          Edit
          <img src="/editIcon.png" alt='edit' />
          </div>
          </button>
      <button className='deletebtn'>
        <div className='button-icon'>
          Delete Profile
          <img src="/deleteIcon.png" alt='delete' />
        </div>
      </button>
      <button className='logoutbtn' onClick={logoutUser}>
      <div className='button-icon'>
          Logout
          <img src="/logoutIcon.png" alt='delete' />
        </div>
      </button>
      </div>
    </div>
  );
}

export default Content1;
