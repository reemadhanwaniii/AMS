'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
        {
          name: 'Pune International Airport',
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kempegowda International Airport Bengaluru',
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chennai International Airport',
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vellore Airport',
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
