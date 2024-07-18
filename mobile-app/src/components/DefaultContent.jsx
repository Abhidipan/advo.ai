// src/components/DefaultContent.jsx
import React, { useRef } from 'react';

function DefaultContent() {
  // Reference to the Zapier component for resetting
  const zapierRef = useRef(null);

  // Function to reset the Zapier component
  const resetZapierComponent = () => {
    // Remove the existing Zapier component
    if (zapierRef.current) {
      zapierRef.current.innerHTML = '';
    }

    // Create a new Zapier component
    const newZapierComponent = document.createElement('zapier-interfaces-page-embed');
    newZapierComponent.pageId = 'clqc8eh4l001g55u5mmycr6s8';
    newZapierComponent.noBackground = true;
    newZapierComponent.style.width = '100%';
    newZapierComponent.style.height = '100%';

    // Append the new Zapier component to the container
    if (zapierRef.current) {
      zapierRef.current.appendChild(newZapierComponent);
    }
  };

  return (
    <div>
      <div className="advo">
        <div className="advo-content">
          <div className='heading'>
            <h1>ADVO: Your Personal Legal Assistant.</h1>
          </div>
          <div className="zapier-embed-container" ref={zapierRef}>
            {/* Initial rendering of Zapier component */}
            <zapier-interfaces-page-embed
              page-id="clqc8eh4l001g55u5mmycr6s8"
              no-background="true"
              style={{ width: '100%', height: '100%' }}
            ></zapier-interfaces-page-embed>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultContent;
