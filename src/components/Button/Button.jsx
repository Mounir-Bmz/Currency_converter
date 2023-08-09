import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ clickTreatment, isOpen }) => {
  // Define a variable to hold the CSS class based on the 'isOpen' prop
  let cssClass;
  if (isOpen) {
    cssClass = 'custom-button custom-button--open';
  } else {
    cssClass = 'custom-button';
  }
  // Render the button element with the appropriate CSS class and onClick event handler
  return (
    <button type="button" className={cssClass} onClick={clickTreatment}>
      =
    </button>
  );
};

Button.propTypes = {
  clickTreatment: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Button;
