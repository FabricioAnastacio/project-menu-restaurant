/* eslint-disable no-magic-numbers */

import { foods } from '../pictures/exportImgs';

/* eslint-disable max-len */
const listhighlights = [
  {
    id: 1,
    obs: '',
    displayDate: [],
    img: foods.sorteio,
    name: 'Sorteio',
    nameHighlights: 'SORTEIO',
    description: 'GANHE UM COMBO - Vá ate nossa pagina do instagram e participe!',
    value: 0,
    amount: 0,
  },
  {
    id: 5,
    obs: '',
    img: foods.luaSuperior,
    name: '12-Lua Superior ARTESANAL',
    displayDate: [0, 1, 2, 3, 4, 5, 6],
    nameHighlights: 'Lua Superior',
    isNew: true,
    group: 'handmade',
    description: 'Feito para um poderoso guerreiro com intensidade e domínio absoluto. Cada mordida é detalhe, evolução. Alcance o nível máximo!',
    ingredients: ['Pão brioche', ' 2 Blends bovinos de 120g', ' Cheddar', ' Requeijão PREMIUM', ' Molho de Bacon Titânico', ' e Salada', ' (ACOMPANHA KATANA BATATA 150G)'],
    value: 34.00,
    amount: 0,
  },
  {
    id: 3,
    obs: '',
    img: foods.tanjiroDelivery,
    name: 'Delivery',
    nameHighlights: 'Delivery',
    displayDate: [0, 1, 2, 3, 4, 5, 6],
    group: 'highlights',
    description: 'Entregamos Segunda a Sabado de 19h as 23h. Para outros locais fora de Teixeiras o valor deve ser consultado',
    value: 4.00,
    amount: 0,
  },
];

export default listhighlights;
