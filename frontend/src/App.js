import { Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPage from './pages/menuPage';
import Avaliations from './pages/avaliationsPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ MenuPage } />
      <Route exact path="/avaliation" Component={ Avaliations } />
    </Routes>
  );
}

export default App;
