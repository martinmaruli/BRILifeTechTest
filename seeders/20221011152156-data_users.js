'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        user_id: 'A01',
        user_name: 'user A01',
        active: true,
      },
      {
        user_id: 'A02',
        user_name: 'user A02',
        active: true,
      },
      {
        user_id: 'B01',
        user_name: 'user B01',
        active: false,
      },
      {
        user_id: 'B02',
        user_name: 'user B02',
        active: true,
      },
      {
        user_id: 'C01',
        user_name: 'user C01',
        active: false,
      },
      {
        user_id: 'C02',
        user_name: 'user C02',
        active: true,
      },
    ]

      await queryInterface.bulkInsert('data_users', data, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('data_users', null, {});
     
  }
};
