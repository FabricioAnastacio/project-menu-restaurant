import { Route, Routes } from 'react-router-dom';
import React from 'react';
import MenuPage from './pages/MenuPage';
import Avaliations from './pages/AvaliationsPage';
import Cart from './pages/Cart';
import AppContext from './context/AppContext';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listCart: [],
    };
  }

  render() {
    const { listCart } = this.state;
    return (
      <AppContext.Provider value={ listCart }>
        <Routes>
          <Route exact path="/" Component={ MenuPage } />
          <Route exact path="/cart" Component={ Cart } />
          <Route exact path="/avaliation" Component={ Avaliations } />
        </Routes>
      </AppContext.Provider>
    );
  }
}

export default App;
