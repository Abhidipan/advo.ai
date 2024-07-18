import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function Content3(onButtonClick) {
  const navigate = useNavigate();

  const {user, logoutUser} = useAuth()
  const [selectedButton, setSelectedButton] = useState(1);
  
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    onButtonClick(buttonIndex);
  };


  const [userLocation, setUserLocation] = useState('Fetching location...');

  useEffect(() => {
    // Function to fetch user's location using Geolocation API and reverse geocoding
    const fetchUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Use reverse geocoding to get place name from latitude and longitude
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
              .then((response) => response.json())
              .then((data) => {
                const placeName = data.display_name || 'Unknown location';
                setUserLocation(placeName);
              })
              .catch((error) => {
                console.error('Error fetching place name:', error);
                setUserLocation('Error fetching location');
              });
          },
          (error) => {
            console.error('Error getting user location:', error);
            setUserLocation('Error fetching location');
          },
          {
            maximumAge: 600000, // 10 minutes
            enableHighAccuracy: true,
          }
        );
      } else {
        setUserLocation('Geolocation is not available on this device.');
      }
    };

    // Fetch user's location when the component mounts
    fetchUserLocation();
  }, []);


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
          <div className='profileOpt'>
          <button className="editbtn">
          <div className='button-icon'>
          Edit
          <img src="/editIcon.png" alt='edit' />
          </div>
          </button>
          {/* <button className="verifybtn">
          <div className='button-icon'>
          Verify
          <img src="/verifiedIcon.png" alt='verify' />
          </div>  
          </button> */}
          </div>
        </div>
      </div>
      <div className="location-section">
        <p>Your Location:</p>
        <p>{userLocation}</p>
        {/* Placeholder for map with pin point */}
        {/* Note: You can use a third-party map library if you need an interactive map */}
        {/* Alternatively, you can display a static map using a service like Mapbox or OpenStreetMap */}
      </div>
      <div className='profileBtn-container'>
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

export default Content3;
