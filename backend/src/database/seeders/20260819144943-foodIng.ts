import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'foodIngredients',
      [
        {
          food_id: 1,
          ing_id: 1,
          unity: 'und',
          quantity: 1,
        },
        {
          food_id: 1,
          ing_id: 2,
          unity: 'und',
          quantity: 1,
        },
        {
          food_id: 1,
          ing_id: 3,
          unity: 'gr',
          quantity: 4,
        },
        {
          food_id: 1,
          ing_id: 4,
          unity: 'gr',
          quantity: 4,
        },
        {
          food_id: 1,
          ing_id: 5,
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