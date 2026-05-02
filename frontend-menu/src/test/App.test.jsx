import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Verifica se a pagina é iniciada corretamente', () => {
  it('Busca o titulo do Cardapio', () => {
    renderWithRouter(<App />);

    const titlePage = screen.getByText(/CARDAPIO/i);
    expect(titlePage).toBeInTheDocument();
  });
});
