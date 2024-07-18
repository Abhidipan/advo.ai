import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';


function Main({ selectedButton }) {
  let content;

  switch (selectedButton) {
    case 1:
      content = <Main1 />;
      break;
    case 2:
      content = <Main2 />;
      break;
    case 3:
      content = <Main3 />;
      break;
      case 4:
      content = <Main4 />;
      break;
    default:
      content = <Main1 />;
  }

  return <div className="main">{content}</div>;
}

// Add PropTypes validation
Main.propTypes = {
  selectedButton: PropTypes.number.isRequired, // Adjust the type based on your use case
};

export default Main;
