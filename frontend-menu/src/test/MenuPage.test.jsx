import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuPage from '../pages/MenuPage';
import renderWithRouter from './helpers/renderWithRouter';
import listFoods from '../data/listFoods';
import listDrinks from '../data/listDrinks';

describe('Verifica se a pagina do cardapio é iniciada corretamente', () => {
  it('Busca o titulo do Cardapio', () => {
    renderWithRouter(<MenuPage />);

    const titlePage = screen.getByText(/CARDAPIO/i);
    expect(titlePage).toBeInTheDocument();
  });
  it('Verifica se os botões de filtro estão na tela', () => {
    renderWithRouter(<MenuPage />);

    const buttonPetiscos = screen.getByLabelText('Petiscos');
    const buttonBebidas = screen.getByLabelText('Bebidas');
    const buttonDrinks = screen.getByLabelText('Drinks');
    const buttonCervejas = screen.getByLabelText('Cervejas');
    const buttonSemAlcool = screen.getByLabelText('Sem alcool');

    expect(buttonPetiscos).toBeInTheDocument();
    expect(buttonPetiscos.type).toBe('checkbox');
    expect(buttonBebidas).toBeInTheDocument();
    expect(buttonBebidas.type).toBe('checkbox');

    userEvent.click(buttonBebidas);

    expect(buttonDrinks).toBeInTheDocument();
    expect(buttonDrinks.type).toBe('checkbox');
    expect(buttonCervejas).toBeInTheDocument();
    expect(buttonCervejas.type).toBe('checkbox');
    expect(buttonSemAlcool).toBeInTheDocument();
    expect(buttonSemAlcool.type).toBe('checkbox');
  });
  it('Verifica se a lista é criada corretamente, contendo um botão para cada item', () => {
    renderWithRouter(<MenuPage />);

    const buttonBebidas = screen.getByLabelText('Bebidas');
    // const buttonCervejas = screen.getByLabelText('Cervejas');
    // const buttonSemAlcool = screen.getByLabelText('Sem alcool');

    listFoods.forEach((item) => {
      expect(screen.getByRole('button', { name: item.name })).toBeInTheDocument();
    });

    ///
    buttonBebidas.checked = true;
    console.log(buttonBebidas.checked);

    userEvent.click(buttonBebidas);

    console.log(screen.getByRole('button', { name: 'Caipirinha' }));
  });
});
