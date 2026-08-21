import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'food_ingredients',
      [
        {
          food_id: 1,
          ing_id: 1,
          unity: 'und',
          quantity: 1,
          is_additional: false,
        },
        {
          food_id: 1,
          ing_id: 2,
          unity: 'und',
          quantity: 1,
          is_additional: false,
        },
        {
          food_id: 1,
          ing_id: 3,
          unity: 'gr',
          quantity: 4,
          is_additional: false,
        },
        {
          food_id: 1,
          ing_id: 4,
          unity: 'gr',
          quantity: 4,
          is_additional: false,
        },
        {
          food_id: 1,
          ing_id: 5,
          unity: 'gr',
          quantity: 5,
          is_additional: false,
        },
        {
          food_id: 1,
          ing_id: 6,
          unity: 'und',
          quantity: 1,
          is_additional: true,
          plus_price: 4.00,
        },
        {
          food_id: 1,
          ing_id: 2,
          unity: 'und',
          quantity: 2,
          is_additional: true,
          plus_price: 4.00,
        },
        {
          food_id: 1,
          ing_id: 8,
          unity: 'und',
          quantity: 2,
          is_additional: true,
          plus_price: 2.50,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('food_ingredients', {});
  },
}