import PropTypes from 'prop-types';

import './Amount.scss';

const Amount = ({ selectedCurrencyName, convertedAmount }) => (
  <div className="amount">
    <p className="amount-value">{convertedAmount}</p>
    <p className="amount-currency">{selectedCurrencyName}</p>
  </div>
);

Amount.propTypes = {
  selectedCurrencyName: PropTypes.string.isRequired,
  convertedAmount: PropTypes.string.isRequired,
};

export default Amount;
