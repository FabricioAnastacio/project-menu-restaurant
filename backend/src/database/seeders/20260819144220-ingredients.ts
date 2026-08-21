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
          name: 'Bife 90g',
          quantity: 10,
          unity: 'und',
          price: 1.50,
        },
        {
          name: 'Salada',
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
          name: 'Batata palha',
          quantity: 6,
          unity: 'und',
          price: 3.20,
        },
        {
          name: 'Bacon cubos',
          quantity: 2,
          unity: 'kg',
          price: 7.50,
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
          name: 'Requeijão cremoso',
          quantity: 2,
          unity: 'kg',
          price: 1.20,
        },
        {
          name: 'Cheddar',
          quantity: 2,
          unity: 'kg',
          price: 3.20,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ingredients', {});
  },
}