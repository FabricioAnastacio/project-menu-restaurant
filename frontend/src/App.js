import { Route, Routes } from 'react-router-dom';
import React from 'react';
import MenuPage from './pages/MenuPage';
import Avaliations from './pages/AvaliationsPage';
import listFoods from './data/listFoods';
import listDrinks from './data/listDrinks';
import Cart from './pages/CartPage';
import AppContext from './context/AppContext';
import ConfirmOrder from './pages/ConfirmOrder';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: {
        listMenu: {
          food: listFoods.food,
          candy: listFoods.candy,
          additional: listFoods.additional,
          allDrinks: listDrinks,
        },
        counterRequest: 0,
        valueTotal: 0,
      },
    };
  }

  render() {
    const { value } = this.state;
    return (
      <AppContext.Provider value={ value }>
        <Routes>
          <Route exact path="/" Component={ MenuPage } />
          <Route exact path="/cart" Component={ Cart } />
          <Route exact path="/order" Component={ ConfirmOrder } />
          <Route exact path="/avaliation" Component={ Avaliations } />
        </Routes>
      </AppContext.Provider>
    );
  }
}

export default App;
