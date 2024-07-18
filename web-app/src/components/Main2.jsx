// // src/components/Component1.jsx
// import React, { useState } from 'react';

// function Component1() {
//   const [activeSection, setActiveSection] = useState(null);

//   const handleButtonClick = (index) => {
//     setActiveSection((prevSection) => (prevSection === index ? null : index));
//   };

//   const handleReturnBack = () => {
//     setActiveSection(null);
//   };

  // const getGridStyle = () => {
  //   if (activeSection !== null) {
  //     return {
  //       display: 'grid',
  //       gridTemplateColumns: 'repeat(3, 1fr)',
  //       gridTemplateRows: 'repeat(2, 1fr)',
  //       gridColumnGap: '10px',
  //       gridRowGap: '10px',
  //     };
  //   } else {
  //     return {
  //       display: 'grid',
  //       gridTemplateColumns: 'repeat(2, 1fr)',
  //       gridTemplateRows: 'repeat(2, 1fr)',
  //       gridColumnGap: '10px',
  //       gridRowGap: '10px',
  //     };
  //   }
  // };

  // const getSectionStyle = (sectionNumber) => {
  //   if (activeSection === sectionNumber) {
  //     return {
  //       gridArea: '1 / 1 / 3 / 4',
  //       width: '100%',
  //     };
  //   } else {
  //     return {
  //       gridArea: `auto`,
  //       width: activeSection !== null ? '100%' : '100%',
  //     };
  //   }
  // };

//   return (
//     <div className='new_main' style={getGridStyle()}>
//       {activeSection !== null && (
//         <button className='returnButton' onClick={handleReturnBack}>
//           Return Back
//         </button>
//       )}
//       <div className={`section ${activeSection === 0 ? 'active' : ''}`} style={getSectionStyle(0)}>
//         <h2>Section 1</h2>
//         <p>Description for Section 1</p>
//         <button onClick={() => handleButtonClick(0)}>Button 1</button>
//       </div>
//       <div className={`section ${activeSection === 1 ? 'active' : ''}`} style={getSectionStyle(1)}>
//         <h2>Section 2</h2>
//         <p>Description for Section 2</p>
//         <button onClick={() => handleButtonClick(1)}>Button 2</button>
//       </div>
//       <div className={`section ${activeSection === 2 ? 'active' : ''}`} style={getSectionStyle(2)}>
//         <h2>Section 3</h2>
//         <p>Description for Section 3</p>
//         <button onClick={() => handleButtonClick(2)}>Button 3</button>
//       </div>
//       <div className={`section ${activeSection === 3 ? 'active' : ''}`} style={getSectionStyle(3)}>
//         <h2>Section 4</h2>
//         <p>Description for Section 4</p>
//         <button onClick={() => handleButtonClick(3)}>Button 4</button>
//       </div>
//     </div>
//   );
// }

// export default Component1;


// src/components/Component1.jsx
import React, { useState } from 'react';

function Component1() {
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (index) => {
    setActiveSection((prevSection) => (prevSection === index ? null : index));
  };

  const handleReturnBack = () => {
    setActiveSection(null);
  };

  const getGridStyle = () => {
    if (activeSection !== null) {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto 1fr', // Two rows, first one auto-sized, second one takes remaining space
        gridColumnGap: '10px',
        gridRowGap: '10px',
      };
    } else {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridColumnGap: '10px',
        gridRowGap: '10px',
      };
    }
  };

  const getSectionContent = (sectionNumber) => {
    const defaultContents = {
      0: (
        <div>
          <h2>Clear Legal Communication</h2>
          <p>Make legal documents easy to understand for everyone involved, promoting clarity and accessibility.</p>
          <button className='sectionBtn' onClick={() => handleButtonClick(0)}>USE</button>
        </div>
      ),
      1: (
        <div>
          <h2>Image-to-Text Legal Converter</h2>
          <p>Convert images of legal content into editable text for efficient collaboration and information extraction.</p>
          <button className='sectionBtn' onClick={() => handleButtonClick(1)}>USE</button>
        </div>
      ),
      2: (
        <div>
          <h2>Legal Document Translation</h2>
          <p>Break down language barriers in legal communication with accurate translation services, enabling global understanding.</p>
          <button className='sectionBtn' onClick={() => handleButtonClick(2)}>USE</button>
        </div>
      ),
      3: (
        <div>
          <h2>Agreement Precision Review</h2>
          <p> Ensure the accuracy of legal agreements through a thorough reviewing tool, meeting standards and serving the needs of all parties involved.</p>
          <button className='sectionBtn' onClick={() => handleButtonClick(3)}>USE</button>
        </div>
      ),
    };

    const embedContents = {
      0: (
        <iframe
          src="https://summarizze.streamlit.app/?embed=true"
          height="120%"
          style={{ width: '100%', border: 'none' }}
        ></iframe>
      ),
      1: (
        <iframe
          src="https://dummadum-mqfpj2cwhwk9nkgshppofa.streamlit.app/"
          height="120%"
          style={{ width: '100%', border: 'none' }}
        ></iframe>
      ),
      2: (
        <iframe
          src="https://advo-translate.streamlit.app/?embed=true"
          height="120%"
          style={{ width: '100%', border: 'none' }}
        ></iframe>
      ),
      3: (
        <iframe
          src="https://astuteai.streamlit.app/?embed=true"
          height="120%"
          style={{ width: '100%', border: 'none' }}
        ></iframe>
      ),
    };

    return activeSection === sectionNumber ? embedContents[sectionNumber] : defaultContents[sectionNumber];
  };

  return (
    <div className='new_main' style={getGridStyle()}>
      {activeSection !== null && (
        <button className='returnButton' onClick={handleReturnBack}>
          Return Back
        </button>
      )}
      <div className={`section ${activeSection === 0 ? 'active' : ''}`}>
        {getSectionContent(0)}
      </div>
      <div className={`section ${activeSection === 1 ? 'active' : ''}`}>
        {getSectionContent(1)}
      </div>
      <div className={`section ${activeSection === 2 ? 'active' : ''}`}>
        {getSectionContent(2)}
      </div>
      <div className={`section ${activeSection === 3 ? 'active' : ''}`}>
        {getSectionContent(3)}
      </div>
    </div>
  );
}

export default Component1;
