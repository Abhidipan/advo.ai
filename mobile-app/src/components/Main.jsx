// src/components/Main.jsx
import React, { useEffect } from 'react';
import DefaultContent from './DefaultContent'; // Assuming DefaultContent is in a separate file

function Main() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="main">
      <DefaultContent />
    </div>
  );
}

export default Main;
