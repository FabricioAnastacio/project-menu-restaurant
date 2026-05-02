/* eslint-disable no-magic-numbers */

import { foods } from '../pictures/exportImgs';

/* eslint-disable max-len */
const listhighlights = [
  {
    id: 1,
    obs: '',
    displayDate: [0, 3, 4, 5, 6],
    img: foods.comunicado,
    name: 'Comunicado',
    nameHighlights: 'COMUNICADO',
    description: 'Nesta Sexta, Sabado não iremos funcionar',
    group: 'highlights',
    value: 0,
    amount: 0,
  },
  {
    id: 6,
    obs: '',
    img: foods.respiracaoChamas,
    name: '13-Respiração das Chamas',
    displayDate: [0, 1, 2, 3, 4, 5, 6],
    nameHighlights: 'Respiração das Chamas',
    isNew: true,
    group: 'handmade',
    description: 'Forjado para pedir mais ele surge, Respiração das chamas. Um lanche tropical, doce no primeiro impacto, insano na última mordida... Ele é ousado, intenso e feito para quem busca sabor de verdade.',
    ingredients: ['Pão brioche', ' 1 Blends bovinos de 120g', ' Bacon fatiado', ' Mussarela', ' Abacaxi com Mel', ' Molho especial barbecue', ' Alface', ' (ACOMPANHA KATANA BATATA 150G)'],
    value: 37.00,
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
