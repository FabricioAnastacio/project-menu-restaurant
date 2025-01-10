import { drinks, foods } from '../imgs/exportImgs';

const listMenu = {
  foods: [
    {
      img: foods.picanha,
      name: 'Picanha Bolvina',
      description: '400g; Acompanha Farofa e Vinagrete',
      value: 'R$78,80',
    },
    {
      img: foods.bttaFrita,
      name: 'Batata Frita',
      description: '',
      value: 'R$20.00',
    },
    {
      img: foods.bolinhoCarne,
      name: 'Bolinho de Carne',
      description: 'Acompanha molho especial',
      value: 'R$32,90',
    },
    {
      img: foods.bolinhoCostela,
      name: 'Bolinho de Costela',
      description: 'Acompanha vinagrete',
      value: 'R$32,90',
    },
    {
      img: foods.carnePanela,
      name: 'Carne de panela',
      description: '',
      value: 'R$32,90',
    },
    {
      img: foods.carneSol,
      name: 'Carne de sol com mandioca',
      description: 'Preparada na menteiga de garrafa',
      value: 'R$56,80',
    },
    {
      img: foods.coxinhaCostela,
      name: 'Coxinha de costela',
      description: '',
      value: 'R$32,90',
    },
    {
      img: foods.coxinhaPernil,
      name: 'Coxinha de Pernil',
      description: '',
      value: 'R$32,90',
    },
    {
      img: foods.fileMignonGorgonzola,
      name: 'File mignon bolvino',
      description: '400 gramas de File mignon bolvino ao molho de Gorgonzola',
      value: 'R$74,00',
    },
  ],
  drinks: [
    {
      img: drinks.caipirinha,
      name: 'Caipirinha',
      description: '80ml cachaça, limão e açucar',
      value: 'R$14,00',
    },
    {
      img: drinks.caipVodkaMorango,
      name: 'CaipVodka Morango',
      description: '80ml Orloff/Absolut, *fruta e açucar',
      value: 'R$16,90/R$18.90',
    },
    {
      img: drinks.campari,
      name: 'Campari',
      description: '80ml Campari',
      value: 'R$13,00',
    },
    {
      img: drinks.ginTonica,
      name: 'Gin Tropical',
      description: '80ml Gin; Morango e Maracuja; açucar',
      value: 'R$26,90',
    },
    {
      img: drinks.coronita,
      name: 'Coronita',
      description: '80ml Gin, limão e cerveja Corona',
      value: 'R$18,90',
    },
    {
      img: drinks.mojito,
      name: 'Mojito',
      description: '80ml Rum, limão, Hortelã e açucar',
      value: 'R$21,00',
    },
    {
      img: drinks.negroni,
      name: 'Negroni',
      description: '40ml Gin, 40ml Campari, 40ml ?',
      value: 'R$21,90',
    },
  ],
};

export default listMenu;
