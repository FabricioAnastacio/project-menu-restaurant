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
          name: 'Bife',
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
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ingredients', {});
  },
}