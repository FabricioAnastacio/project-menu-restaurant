import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'foodIngredients',
      [
        {
          foodId: 1,
          ingId: 1,
          unity: 'und',
          quantity: 1,
        },
        {
          foodId: 1,
          ingId: 2,
          unity: 'und',
          quantity: 1,
        },
        {
          foodId: 1,
          ingId: 3,
          unity: 'gr',
          quantity: 4,
        },
        {
          foodId: 1,
          ingId: 4,
          unity: 'gr',
          quantity: 4,
        },
        {
          foodId: 1,
          ingId: 5,
          unity: 'gr',
          quantity: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('foodIngredients', {});
  },
}