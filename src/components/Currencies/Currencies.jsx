// Import the PropTypes library for type-checking props
import PropTypes from 'prop-types';

import './Currencies.scss';

// Define the functional component 'Currencies' that takes 'currenciesList' as a prop
const Currencies = ({
  currenciesList,
  handleClick,
  searchValue,
  setSearchValue,
}) => (
  <div className="currencies">
    <div className="currencies-title">
      <input
        type="text"
        className="currencies-search"
        placeholder="Rechercher"
        value={searchValue}
        onChange={(event) => {
          // When the user types in the input field, this event handler is triggered
          // console.log(event.target.value);

          // Transmit the new value in App's state
          setSearchValue(event.target.value);
        }}
      />
    </div>
    {/* Iterate over each item in 'currenciesList' and create an 'li' element */}
    <ul>
      {currenciesList.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
        <li
          className="currency"
          key={item.name}
          onClick={() => {
            console.log(`Click on currency : ${item.name}`);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

// Define the prop types for 'currenciesList' prop
Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Currencies;
