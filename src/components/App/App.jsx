import React from 'react';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Button from '../Button/Button';

import currencies from '../../data/currencies';

import './App.scss';

class App extends React.Component {
  // Constructor to initialize the component state
  constructor(props) {
    super(props);

    // Initialize the component state
    this.state = {
      // Indicate if currency block is open
      currenciesOpen: true,
      // The amount to be converted
      baseAmount: 1,
      // The name of the currently selected currency
      currencyName: 'United States Dollar',
      // Input value for the currency search field
      inputSearch: '',
    };
    // Binding the 'handleClick' method to the current instance of the class
    // This is necessary to preserve the correct context of 'this' inside the method
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOnCurrency = this.handleClickOnCurrency.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
  }

  handleClick() {
    // Retrieve the current value of currenciesOpen from the state
    const { currenciesOpen } = this.state;
    this.setState({
      // Toggle the value of currenciesOpen and update the state
      currenciesOpen: !currenciesOpen,
    });
  }

  // Method to handle the click event on a currency item
  handleClickOnCurrency(newCurrencyName) {
    this.setState({
      currencyName: newCurrencyName,
    });
  }

  // Method for updating the `inputSearch` state property
  setSearchValue(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  // Method to compute the converted amount based on the selected currency
  computeAmount() {
    const { currencyName, baseAmount } = this.state;

    const selectedCurrency = currencies.find(
      (item) => item.name === currencyName
    );
    // console.log(selectedCurrency);
    const { rate } = selectedCurrency;

    const result = baseAmount * rate;

    const resultToDisplay = result.toFixed(2);

    return resultToDisplay;
  }

  filterCurrencies() {
    // Destructuring the `inputSearch` property from the component's state
    const { inputSearch } = this.state;
    // Converting the search input to lowercase for case-insensitive comparison
    const inputSearchLowered = inputSearch.toLowerCase();
    // Filtering the currencies array based on the search input
    const filteredCurrencies = currencies.filter((item) => {
      // Convert the name of each currency to lowercase for case-insensitive comparison
      const nameLowered = item.name.toLowerCase();
      // Check if the currency's name includes the search input (case-insensitive)
      return nameLowered.includes(inputSearchLowered);
    });
    // Return the array of filtered currencies
    return filteredCurrencies;
  }

  // Render method to render the component's UI
  render() {
    const { currenciesOpen, baseAmount, currencyName, inputSearch } = this.state;
    const result = this.computeAmount();
    const filteredCurrencies = this.filterCurrencies();

    return (
      <div className="App">
        <Header currentAmount={baseAmount} />
        <main>
          <Button clickTreatment={this.handleClick} isOpen={currenciesOpen} />
          {currenciesOpen && (
            <Currencies
              currenciesList={filteredCurrencies}
              handleClick={this.handleClickOnCurrency}
              searchValue={inputSearch}
              setSearchValue={this.setSearchValue}
            />
          )}
          <Amount
            selectedCurrencyName={currencyName}
            convertedAmount={result}
          />
        </main>
      </div>
    );
  }
}

export default App;
