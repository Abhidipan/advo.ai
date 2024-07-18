// // src/components/Content2.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Content2({ onButtonClick }) {
//   // const navigate = useNavigate();

//   // const {user, logoutUser} = useAuth()
//   const [selectedButton, setSelectedButton] = useState(1);

//   const handleButtonClick = (buttonIndex) => {
//     setSelectedButton(buttonIndex);
//     onButtonClick(buttonIndex);
//   };
//   return (
//     <div className='documents'>
//       <h2>Documents</h2>
//       {/* component 1 */}
//       <button onClick={() => handleButtonClick(1)}>Document Generator</button> 
//       <a href="https://summarizze.streamlit.app/"><button>Document Summary</button></a>
//       <button onClick={() => handleButtonClick(2)}>Document Translator</button>
//       <button onClick={() => handleButtonClick(3)}>Document xyz</button>
//     </div>
//   );
// }

// export default Content2;

// src/components/Main.jsx
import React, { useEffect } from 'react';

function Content2() {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';

    // Append the script element to the document's head
    document.head.appendChild(script);

    // Cleanup: Remove the script element when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className='menu2'>
    {/* <div className="advo1">
    <div className="advo-content1">
    <h1>ADVO : Your Personal Legal Assistant.</h1>
      <zapier-interfaces-page-embed
        page-id='clq9qa78r000lttkqj6lgumx4'
        no-background='true'
        style={{ width: '100%', height: '100%' }}
      ></zapier-interfaces-page-embed>
    </div>
    </div> */}
    <h1> This feature is still Under Development</h1>
    <img src="https://github.com/CODERdotEXE/advo-assets/blob/main/underDev.png" alt="" />
    </div>
  );
}

export default Content2;
