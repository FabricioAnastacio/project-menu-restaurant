import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'ingredients',
      [
        {
          name: 'Pão',
          quantity: 20,
          unity: 'und',
          price: 0.50,
        },
        {
          name: 'Pão brioche',
          quantity: 20,
          unity: 'und',
          price: 3.20,
        },
        {
          name: 'Bife 90g',
          quantity: 10,
          unity: 'und',
          price: 1.50,
        },
        {
          name: 'Bland bovino 120g',
          quantity: 1,
          unity: 'kg',
          price: 10.50,
        },
        {
          name: 'Alface',
          quantity: 10,
          unity: 'und',
          price: 0.80,
        },
        {
          name: 'Tomate',
          quantity: 10,
          unity: 'und',
          price: 0.80,
        },
        {
          name: 'Milho',
          quantity: 5,
          unity: 'und',
          price: 1.20,
        },
        {
          name: 'Batata',
          quantity: 20,
          unity: 'und',
          price: 5.00,
        },
        {
          name: 'Batata palha',
          quantity: 6,
          unity: 'und',
          price: 3.20,
        },
        {
          name: 'Calabresa',
          quantity: 1,
          unity: 'kg',
          price: 9.50,
        },
        {
          name: 'Mussarela',
          quantity: 1.5,
          unity: 'kg',
          price: 4.80,
        },
        {
          name: 'Mussarela derretida',
          quantity: 5,
          unity: 'und',
          price: 3.00,
        },
        {
          name: 'Cheddar',
          quantity: 2,
          unity: 'kg',
          price: 3.20,
        },
        {
          name: 'Baccon',
          quantity: 1,
          unity: 'kg',
          price: 7.50,
        },
        {
          name: 'Bacon cubos',
          quantity: 2,
          unity: 'kg',
          price: 7.50,
        },
        {
          name: 'Baccon fatiado',
          quantity: 1,
          unity: 'kg',
          price: 7.50,
        },
        {
          name: 'Queijo crocante',
          quantity: 1,
          unity: 'kg',
          price: 8.50,
        },
        {
          name: 'Queijo empanado crocante',
          quantity: 5,
          unity: 'und',
          price: 5.00,
        },
        {
          name: 'Requeijão cremoso',
          quantity: 2,
          unity: 'kg',
          price: 1.20,
        },
        {
          name: 'Requeijão PREMIUN',
          quantity: 2,
          unity: 'kg',
          price: 10.00,
        },
        {
          name: 'Ovo',
          quantity: 12,
          unity: 'und',
          price: 0.50,
        },
        {
          name: 'Presunto',
          quantity: 1,
          unity: 'kg',
          price: 3.00,
        },
        {
          name: 'Frango desfiado',
          quantity: 1,
          unity: 'kg',
          price: 2.50,
        },
        {
          name: 'Cebola roxa',
          quantity: 1,
          unity: 'kg',
          price: 1.50,
        },
        {
          name: 'Doce de leite',
          quantity: 1,
          unity: 'kg',
          price: 10,
        },
        {
          name: 'Molho de Baccon Titânico',
          quantity: 500,
          unity: 'ml',
          price: 12.00,
        },
        {
          name: 'Molho Titânico',
          quantity: 500,
          unity: 'ml',
          price: 10.00,
        },
        {
          name: 'Molho especial',
          quantity: 500,
          unity: 'ml',
          price: 7.00,
        },
        {
          name: 'Molho barbecue',
          quantity: 500,
          unity: 'ml',
          price: 8.00,
        },
        {
          name: 'Abacaxi com Mel',
          quantity: 10,
          unity: 'und',
          price: 4.00,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ingredients', {});
  },
}