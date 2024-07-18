// // src/components/Main.jsx
// import React, { useEffect, useState } from 'react';
// import LegalLibraryContent from './LegalLibraryContent';

// function Main1() {
//   const [showLegalLibraryContent, setShowLegalLibraryContent] = useState(false);

//   useEffect(() => {
//     // Dynamically create a script element
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';

//     // Append the script element to the document's head
//     document.head.appendChild(script);

//     // Cleanup: Remove the script element when the component is unmounted
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []); // The empty dependency array ensures that the effect runs once when the component mounts

//   const handleLegalLibraryButtonClick = () => {
//     setShowLegalLibraryContent(true);
//   };

//   const handleBackButtonClick = () => {
//     setShowLegalLibraryContent(false);
//   };

//   return (
//     <div className="main">
//       {showLegalLibraryContent ? (
//         <LegalLibraryContent onBackButtonClick={handleBackButtonClick} />
//       ) : (
//         <DefaultContent onLegalLibraryButtonClick={handleLegalLibraryButtonClick} />
//       )}
//     </div>
//   );
// }

// export default Main1;

// // DefaultContent.jsx
// function DefaultContent({ onLegalLibraryButtonClick }) {
//   return (
//     <div className="advo">
//               <button onClick={onLegalLibraryButtonClick}>Go to Legal Library</button>
//       <div className="advo-content">
//         <h1>ADVO : Your Personal Legal Assistant.</h1>
//         <h2>I am here to help you out with all your legal queries.</h2>
//         <zapier-interfaces-page-embed 
//           page-id='cln2vi4od452340qlc6ltg4uci'
//           no-background='true'
//           style={{ width: '90%', height: '100%' }}
//         ></zapier-interfaces-page-embed>
//       </div>
//     </div>
//   );
// }



// src/components/Main.jsx
import React, { useEffect, useState } from 'react';

function Main1() {
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
    <div className="main">
      <DefaultContent />
    </div>
  );
}

export default Main1;

// DefaultContent.jsx
function DefaultContent() {
  return (
    <div className="advo">
      <div className="advo-content">
        <h1>ADVO : Your Personal Legal Assistant.</h1>
        <h2>Multilingual Leagal Information Service at Your Fingertips.</h2>
        <zapier-interfaces-page-embed 
          page-id='cln2vi4od452340qlc6ltg4uci'
          no-background='true'
          style={{ width: '90%', height: '100%' }}
        ></zapier-interfaces-page-embed>
      </div>
    </div>
  );
}
