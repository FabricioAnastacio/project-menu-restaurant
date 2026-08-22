import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'foods',
      [
        {
          name: '1-Kuririn',
          desc: 'Com a calma de um monje e forte como gerreiro ele derrota sua fome',
          img: 'kuririn.png',
          group: 'classic',
          price: 12.50,
        },
        {
          name: '2-Mestre Kame',
          desc: 'Pão, Bife 90g, Ovo, Salada, Milho e batata.',
          img: 'foods.kame',
          group: 'classic',
          price: 14.50,
        },
        {
          name: '3-Super Sayajin',
          desc: 'Quando a fome alcança o nível máximo… a transformação acontece. Não é só um lanche. É o despertar do apetite.',
          img: 'kuririn.png',
          group: 'classic',
          price: 16.50,
        },
        {
          name: '4-Hawk Bacon',
          desc: 'Um ataque rápido. Um impacto certeiro. É sabor a cada mordida.',
          img: 'kuririn.png',
          group: 'classic',
          price: 22.00,
        },
        {
          name: '5-Fênix Burger',
          desc: 'Das chamas nasce um sabor impossível de derrotar. A cada mordida, a vontade de comer mais é forte.',
          img: 'kuririn.png',
          group: 'classic',
          price: 25.00,
        },
        {
          name: '6-Beleza da Natureza VEGETARIANO',
          desc: 'Pão, 2 Ovos, Mussarela, Cebola roxa, Salada, Milho e batata',
          img: 'kuririn.png',
          group: 'classic',
          price: 14.50,
        },
        {
          name: '7-Big Tanjiro',
          desc: 'Determinação que corta qualquer fome. Gigante. Honrado. A vontade de matar sua fome é Imparável.',
          img: 'kuririn.png',
          group: 'classic',
          price: 30.00,
        },
        {
          name: '8-Baby Stitch ARTESANAL',
          desc: 'Pequeno no tamanho. Caótico no sabor. Uma explosão inesperada a cada mordida.',
          img: 'kuririn.png',
          group: 'handmade',
          price: 25.00,
        },
        {
          name: '9-Pecado da Gula ARTESANAL',
          desc: 'Não é sobre pecado... é sobre despertar o verdadeiro poder do sabor.',
          img: 'kuririn.png',
          group: 'handmade',
          price: 26.50,
        },
        {
          name: '10-Titã Blindado ARTESANAL',
          desc: 'Blindagem ativada. Impacto liberado. Estrutura pesada. Presença dominante.',
          img: 'kuririn.png',
          group: 'handmade',
          price: 27.00,
        },
        {
          name: '11-Titã de Attack ARTESANAL',
          desc: 'Direto das muralhas ele surge: Duas carnes suculentas e muito cheddar derretido em uma avalanche de molho de bacon titanico. Tudo se une em uma explosão intensa a cada mordida. Ataque total a sua fome!',
          img: 'kuririn.png',
          group: 'handmade',
          price: 33.00,
        },
        {
          name: '12-Lua Superior ARTESANAL',
          desc: 'Feito para um poderoso guerreiro com intensidade e domínio absoluto. Cada mordida é detalhe, evolução. Alcance o nível máximo!',
          img: 'kuririn.png',
          group: 'handmade',
          price: 34.00,
        },
        {
          name: '13-Respiração das Chamas ARTESANAL',
          desc: 'Forjado para pedir mais ele surge, Respiração das chamas. Um lanche tropical, doce no primeiro impacto, insano na última mordida... Ele é ousado, intenso e feito para quem busca sabor de verdade.',
          img: 'kuririn.png',
          group: 'handmade',
          price: 37.00,
        },
        {
          name: '14-Titã Colossal ARTESANAL',
          desc: 'Quando ele surge… tudo para. Gigante, carregado e absolutamente destruidor de fome.',
          img: 'kuririn.png',
          group: 'handmade',
          price: 38.00,
        },
        {
          name: '1-Katana batata 150G',
          desc: '150g',
          img: 'kuririn.png',
          group: 'additional',
          price: 7.00,
        },
        {
          name: '2-Katana Blinda 500G',
          desc: 'Batata, bacon, cheddar Premium e mussarela derretida',
          img: 'kuririn.png',
          group: 'additional',
          price: 35.00,
        },
        {
          name: '3-Maionese da Casa Tradicional 30g',
          desc: '30g',
          img: 'kuririn.png',
          group: 'additional',
          price: 3.00,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('foods', {});
  },
}
