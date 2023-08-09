import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ clickTreatment, isOpen }) => {
  let cssClass;
  if (isOpen) {
    cssClass = 'custom-button custom-button--open';
  } else {
    cssClass = 'custom-button';
  }
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
