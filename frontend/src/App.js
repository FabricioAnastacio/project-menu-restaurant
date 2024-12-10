import { Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPage from './pages/menuPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ MenuPage } />
    </Routes>
  );
}

export default App;
