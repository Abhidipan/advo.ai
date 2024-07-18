import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

function LeftMenubar({ selectedButton }) {
  let content;

  switch (selectedButton) {
    case 1:
      content = <Content1 />;
      break;
    case 2:
      content = <Content2 />;
      break;
    case 3:
      content = <Content3 />;
      break;
    default:
      content = <Content1 />;
  }

  return <div className="left-menubar">{content}</div>;
}

// Add PropTypes validation
LeftMenubar.propTypes = {
  selectedButton: PropTypes.number.isRequired, // Adjust the type based on your use case
};

export default LeftMenubar;
