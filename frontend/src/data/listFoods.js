/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
import { foods } from '../pictures/exportImgs';

const listFoods = {
  food: [
    {
      id: 1,
      obs: '',
      img: foods.kuririn,
      name: 'Kuririn',
      description: 'Pão, Bife 90g, Salada, Milho e batata',
      ingredients: ['Pão', ' Bife 90g', ' Salada', ' Milho e batata'],
      value: 12.50,
      amount: 0,
    },
    {
      id: 2,
      obs: '',
      img: foods.kame,
      name: 'Mestre Kame',
      description: 'Pão, Bife 90g, Ovo, Salada, Milho e batata.',
      ingredients: ['Pão', ' Bife 90g', ' Ovo', ' Salada', ' Milho e batata'],
      value: 14.50,
      amount: 0,
    },
    {
      id: 3,
      obs: '',
      img: foods.superSayajin,
      name: 'Super Sayajin',
      description: 'Quando a fome alcança o nível máximo… a transformação acontece. Não é só um lanche. É o despertar do apetite.',
      ingredients: ['Pão', ' Bife 90g', ' Mussarela', ' ovo', ' Salada', ' Milho e batata'],
      value: 16.50,
      amount: 0,
    },
    {
      id: 4,
      obs: '',
      img: foods.hawkBacon,
      name: 'Hawk Bacon',
      description: 'Um ataque rápido. Um impacto certeiro. É sabor a cada mordida.',
      ingredients: ['Pão', ' Bife 90g', ' Mussarela', ' Bacon', ' Presunto', ' Ovo', ' Salada', ' Milho e batata'],
      value: 22.00,
      amount: 0,
    },
    {
      id: 5,
      obs: '',
      img: foods.fenix,
      name: 'Fênix Burger',
      description: 'Das chamas nasce um sabor impossível de derrotar. A cada mordida, a vontade de comer mais é forte.',
<<<<<<< HEAD
      ingredients: ['Pão', ' Bife 90g', ' Frango desfiado', ' Requeijão cremoso', ' Calabresa', ' Mussarela', ' Salada', ' Milho e batata'],
=======
      ingredients: ['Pão', ' Bife 90g', ' Mussarela', ' Requeijão cremoso', ' Frango desfiado', ' Calabresa', ' Salada', ' Milho e batata'],
>>>>>>> refs/remotes/origin/main
      value: 25.00,
      amount: 0,
    },
    {
      id: 6,
      obs: '',
      img: foods.natureza,
<<<<<<< HEAD
      name: 'Beleza da Natureza',
      description: 'Pão, Ovo, Mussarela, Salada, Milho e batata',
      ingredients: ['VEGETARIANO', 'Pão', ' Ovo', ' Cebola roxa', ' Mussarela', ' Salada', ' Milho e batata'],
=======
      name: 'Beleza da Natureza VEGETARIANO',
      description: 'Pão, 2 Ovos, Mussarela, Cebola roxa, Salada, Milho e batata',
      ingredients: ['Pão', ' 2 Ovos', ' Mussarela', ' Cebola roxa', ' Salada', ' Milho e batata'],
>>>>>>> refs/remotes/origin/main
      value: 14.50,
      amount: 0,
    },
    {
      id: 7,
      obs: '',
      img: foods.bigTanjiro,
      name: 'Big Tanjiro',
      description: 'Determinação que corta qualquer fome. Gigante. Honrado. A vontade de matar sua fome é Imparável.',
<<<<<<< HEAD
      ingredients: ['Pão', ' 2 Bifes 90g', ' Frango desfiado', ' Requeijão cremoso', ' 2 Ovos', ' Bacon', ' Presunto', ' Mussarela', ' Salada', ' Milho e batata'],
=======
      ingredients: ['Pão', ' 2 Bifes 90g', ' Mussarela', ' Requeijão cremoso', ' Bacon', ' Calabresa', ' Frango desfiado', ' Presunto', 'Ovo', ' Salada', ' Milho e batata'],
>>>>>>> refs/remotes/origin/main
      value: 30.00,
      amount: 0,
    },
    {
      id: 8,
      obs: '',
      img: foods.babyStitch,
      name: 'Baby Stitch ARTESANAL',
      description: 'Pequeno no tamanho. Caótico no sabor. Uma explosão inesperada a cada mordida.',
<<<<<<< HEAD
      ingredients: ['Pão brioche', ' Blend bovino 120g', ' Bacon fatiado', ' Cheddar e molho especial', ' (ACOMPANHA FRITAS POKÊ 150G)'],
=======
      ingredients: ['Pão brioche', ' Blend bovino 120g', ' Cheddar', ' Bacon fatiado', ' Molho especial', ' (ACOMPANHA FRITAS POKÊ 150G)'],
>>>>>>> refs/remotes/origin/main
      value: 25.00,
      amount: 0,
    },
    {
      id: 9,
      obs: '',
      img: foods.titanBlind,
      name: 'Titan Blindado ARTESANAL',
      description: 'Blindagem ativada. Impacto liberado. Estrutura pesada. Presença dominante.',
<<<<<<< HEAD
      ingredients: ['Pão brioche', ' Blend bovino 120g', ' Bacon fatiado', ' Mussarela', ' Cheddar', ' Cebola roxa e molho especial', ' (ACOMPANHA KATANA BATATA 150G)'],
=======
      ingredients: ['Pão brioche', ' Blend bovino 120g', ' Mussarela', ' Cheddar', ' Bacon fatiado', ' Cebola roxa', ' Molho especial', ' (ACOMPANHA KATANA BATATA 150G)'],
>>>>>>> refs/remotes/origin/main
      value: 27.00,
      amount: 0,
    },
    {
      id: 10,
      obs: '',
<<<<<<< HEAD
      img: foods.tatanColoss,
      name: 'Titan Colossal ARTESANAL',
      description: 'Quando ele surge… tudo para. Gigante, carregado e absolutamente destruidor de fome.',
      ingredients: ['Pão brioche', '2 Blends bovinos 120g', 'Queijo empanado crocante', 'Bacon fatiado', 'Cheddar', 'Salada', 'Cebola roxa e molho especial', ' (ACOMPANHA KATANA BATATA 150G)'],
=======
      img: foods.titanColoss,
      name: 'Titan Colossal ARTESANAL',
      description: 'Quando ele surge… tudo para. Gigante, carregado e absolutamente destruidor de fome.',
      ingredients: ['Pão brioche', ' 2 Blends bovinos 120g', ' Cheddar', ' Queijo empanado crocante', ' Bacon fatiado', ' Cebola roxa', ' Alface', ' Tomate', ' Molho especial barbecue', ' (ACOMPANHA KATANA BATATA 150G)'],
>>>>>>> refs/remotes/origin/main
      value: 35.00,
      amount: 0,
    },
  ],
  candy: [
    {
      id: 1,
      img: foods.hallsExtra,
      name: 'Bala Halls Extra',
      description: '',
      ingredients: [],
      value: 3.00,
      obs: '',
      amount: 0,
    },
    {
      id: 2,
      img: foods.tridentMenta,
      name: 'Trident Menta',
      description: '',
      ingredients: [],
      value: 4.00,
      obs: '',
      amount: 0,
    },
    {
      id: 3,
      img: foods.tridentMela,
      name: 'Trident Melancia',
      description: '',
      ingredients: [],
      value: 4.00,
      obs: '',
      amount: 0,
    },
  ],
  additional: {
    sauce: [
      {
        img: foods.maineseCasa,
        name: 'Mainese da Casa Tradicional 30g',
        description: '30g',
        ingredients: [],
        value: 3.00,
        obs: '',
        amount: 0,
      },
    ],
  },
};

export default listFoods;
