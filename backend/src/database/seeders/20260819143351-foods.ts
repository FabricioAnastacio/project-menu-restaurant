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
        }
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('foods', {});
  },
}
