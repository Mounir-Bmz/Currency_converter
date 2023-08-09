import React from 'react';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Button from '../Button/Button';

import currencies from '../../data/currencies';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // indique si le bloc des devises est ouvert (affiché)
      currenciesOpen: true,
      // le montant à convertir
      baseAmount: 1,
      // le nom de la devise actuellement sélectionnée
      currencyName: 'United States Dollar',
      // valeur de l'input pout le champ de recherche de devise
      inputSearch: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOnCurrency = this.handleClickOnCurrency.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
  }

  handleClick() {
    const { currenciesOpen } = this.state;
    this.setState({
      currenciesOpen: !currenciesOpen,
    });
  }

  handleClickOnCurrency(newCurrencyName) {
    this.setState({
      currencyName: newCurrencyName,
    });
  }

  setSearchValue(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  computeAmount() {
    const { currencyName, baseAmount } = this.state;

    const selectedCurrency = currencies.find(
      (item) => item.name === currencyName
    );

    const { rate } = selectedCurrency;

    const result = baseAmount * rate;

    const resultToDisplay = result.toFixed(2);

    return resultToDisplay;
  }

  filterCurrencies() {
    // aller chercher des infos dans le state
    const { inputSearch } = this.state;
    // on passe en minuscules la chaîne à recherche
    const inputSearchLowered = inputSearch.toLowerCase();
    // appliquer filter sur le tableau des devises
    const filteredCurrencies = currencies.filter((item) => {
      const nameLowered = item.name.toLowerCase();
      return nameLowered.includes(inputSearchLowered);
    });
    // retourner le résultat
    return filteredCurrencies;
  }

  render() {
    // console.log('[App] render');
    const { currenciesOpen, baseAmount, currencyName, inputSearch } =
      this.state;
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
