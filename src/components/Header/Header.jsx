import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ currentAmount }) => (
  <header className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">{currentAmount} euros</p>
  </header>
);

Header.propTypes = {
  currentAmount: PropTypes.number.isRequired,
};

export default Header;
