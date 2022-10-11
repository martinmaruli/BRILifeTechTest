'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        product_name: 'Asuransi Mikro KKM',
        premium: 50000
      },
      {
        product_name: 'Asuransi Pijar',
        premium: 200000
      },
      {
        product_name: 'Asuransi LifeCare',
        premium: 75000
      },
      {
        product_name: 'Asuransi AcciCare',
        premium: 35000
      }
    ]

      await queryInterface.bulkInsert('data_products', data, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('data_products', null, {});
  }
};
