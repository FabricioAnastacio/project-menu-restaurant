import { Route, Routes } from 'react-router-dom';
import React from 'react';
import MenuPage from './pages/MenuPage';
import Avaliations from './pages/AvaliationsPage';
import food from './data/listFoods';
import drinks from './data/listDrinks';
import Cart from './pages/CartPage';
import AppContext from './context/AppContext';
import ConfirmOrder from './pages/ConfirmOrder';
import ItemDetails from './pages/ItemDetails';
import candy from './data/listCandy';
import listHighlights from './data/listHighlights';

const SUNDAY = 0;
const FRIDAY = 5;
const SATURDAY = 6;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: {
        listMenu: {
          menu: { food, drinks, candy },
          highlights: listHighlights,
        },
        counterRequest: 0,
        valueTotal: 0,
        deliveryDayOff: [SUNDAY, FRIDAY, SATURDAY],
        btnCart: false,
        btnMenu: true,
      },
    };
  }

  render() {
    const { value } = this.state;
    return (
      <AppContext.Provider value={ value }>
        <Routes>
          <Route exact path="/" Component={ MenuPage } />
          <Route exact path="/item/:group/:id" Component={ ItemDetails } />
          <Route exact path="/cart" Component={ Cart } />
          <Route exact path="/order" Component={ ConfirmOrder } />
          <Route exact path="/avaliation" Component={ Avaliations } />
        </Routes>
      </AppContext.Provider>
    );
  }
}

export default App;
