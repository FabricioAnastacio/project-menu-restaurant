import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'drinks',
      [
        {
          name: '1-Agua mineral 500ml',
          desc: '',
          img: 'drinks.agua',
          group: 'drinks',
          price: 3.50,
          quantity: 10,
          unity: 'und',
        },
        {
          name: '2-Agua mineral c/gás 500ml',
          desc: '',
          img: 'drinks.agua',
          group: 'drinks',
          price: 4.50,
          quantity: 10,
          unity: 'und',
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks', {});
  },
}
