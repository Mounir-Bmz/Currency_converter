import PropTypes from 'prop-types';
import React from 'react';

import './Currencies.scss';

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
        placeholder="Research"
        value={searchValue}
        onChange={(event) => {
          // on veut transmettre la nouvelle valeur dans le state de App
          setSearchValue(event.target.value);
        }}
      />
    </div>
    <ul>
      {currenciesList.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
        <li
          className="currency"
          key={item.name}
          onClick={() => {
            // console.log(`Click on currency : ${item.name}`);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

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
