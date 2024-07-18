// index.js or App.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import the CSS file
import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
