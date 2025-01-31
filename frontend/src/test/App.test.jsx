import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<App />);

  const titlePage = screen.getByText(/CARDAPIO/i);
  expect(titlePage).toBeInTheDocument();
});
