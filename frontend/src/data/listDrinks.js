import { drinks } from '../pictures/exportImgs';

const listDrinks = {
  softDrink: [
    {
      id: 1,
      img: drinks.caipirinha,
      name: 'Caipirinha',
      description: 'cachaça, (Morango, marcuja ou limão) e açucar',
      value: 'R$14,00',
    },
    {
      id: 2,
      img: drinks.caipVodkaMorango,
      name: 'CaipVodka ...',
      description: 'ORLOFF ou ABSOLUT, (Morango, marcuja ou limão) e açucar',
      value: 'R$18.90',
    },
    {
      id: 3,
      img: drinks.campari,
      name: 'Campari',
      description: 'Campari',
      value: 'R$13,00',
    },
    {
      id: 4,
      img: drinks.ginTonica,
      name: 'Gin Tropical',
      description: 'Gin; Morango e Maracuja; açucar',
      value: 'R$26,90',
    },
    {
      id: 5,
      img: drinks.coronita,
      name: 'Coronita/Cozumel',
      description: 'Tequila *opicional, limão e cerveja Corona',
      value: 'R$18,90',
    },
    {
      id: 6,
      img: drinks.mojito,
      name: 'Mojito',
      description: 'Rum, limão, Hortelã e açucar',
      value: 'R$21,00',
    },
    {
      id: 7,
      img: drinks.negroni,
      name: 'Negroni',
      description: 'Gin, Campari, Vermuth',
      value: 'R$21,90',
    },
    {
      id: 8,
      img: drinks.lagoaAzul,
      name: 'Lagoa Azul',
      description: 'Limão, Vodka, Licor Stock Blue, Agua c/ Gas',
      value: 'R$23,90',
    },
    {
      id: 9,
      img: drinks.marguerita,
      name: 'Marguerita',
      description: 'Limão, Tequila, Licor Stock',
      value: 'R$22,90',
    },
    {
      id: 10,
      img: drinks.vinho,
      name: 'Vinho',
      description: 'Vinho',
      value: 'Consultar',
    },
    {
      id: 11,
      img: drinks.vodka,
      name: 'Vodka',
      description: 'Orloff ou Absolut',
      value: 'R$9,00',
    },
    {
      id: 12,
      img: drinks.redlabel,
      name: 'Wisky Red',
      description: 'Red Label, gelo, laranja',
      value: 'R$13,00',
    },
    {
      id: 13,
      img: drinks.blacklabel,
      name: 'Wisky Black',
      description: 'Black Label, gelo, laranja',
      value: 'R$20,00',
    },
    {
      id: 14,
      img: drinks.jackdaniels,
      name: 'Wisky Jack',
      description: 'Jack Daniels, gelo, laranja',
      value: 'R$20,00',
    },
  ],
  beer: [
    {
      chopp: [
        {
          img: drinks.chopp,
          name: 'Choop Brahma 350ml',
          description: '350ml',
          value: 'R$8,00',
        },
      ],
      sixHundred: [
        {
          img: drinks.original600,
          name: 'Original 600ml',
          description: '600ml',
          value: 'R$13,00',
        },
        {
          img: drinks.spaten600,
          name: 'Spaten 600ml',
          description: '600ml',
          value: 'R$13,00',
        },
        {
          img: drinks.stella600,
          name: 'Stella Artois 600ml',
          description: '600ml',
          value: 'R$14,00',
        },
      ],
      longNeck: [
        {
          img: drinks.corona,
          name: 'Corona',
          description: '330ml',
          value: 'R$10,00',
        },
        {
          img: drinks.patagoniaIpa,
          name: 'Patagônia IPA',
          description: '355ml',
          value: 'R$10,00',
        },
        {
          img: drinks.patagoniaAmber,
          name: 'Patagônia AMBER',
          description: '355ml',
          value: 'R$10,00',
        },
        {
          img: drinks.spaten,
          name: 'Spaten',
          description: '355ml',
          value: 'R$9,00',
        },
        {
          img: drinks.stella,
          name: 'Stella Artois',
          description: '355ml',
          value: 'R$10,00',
        },
      ],
    },
  ],
  alcoholFree: [
    {
      id: 1,
      img: drinks.agua,
      name: 'Agua sem gás',
      description: '',
      value: 'R$3,50',
    },
    {
      id: 2,
      img: drinks.agua,
      name: 'Agua com gás',
      description: '',
      value: 'R$4,00',
    },
    {
      id: 3,
      img: drinks.coca,
      name: 'Coca Lata',
      description: '',
      value: 'R$5,50',
    },
    {
      id: 4,
      img: drinks.guarana,
      name: 'Gurana Lata',
      description: '',
      value: 'R$5,50',
    },
    {
      id: 5,
      img: drinks.sucoTial,
      name: 'Suco Tial',
      description: '*Conssultar o garçom sobre os sabores disponiveis*',
      value: 'R$5,50',
    },
  ],
};

export default listDrinks;
