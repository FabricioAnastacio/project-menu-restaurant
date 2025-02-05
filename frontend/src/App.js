import { Route, Routes } from 'react-router-dom';
import React from 'react';
import MenuPage from './pages/MenuPage';
import Avaliations from './pages/AvaliationsPage';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" Component={ MenuPage } />
        <Route exact path="/avaliation" Component={ Avaliations } />
      </Routes>
    );
  }
}

export default App;
