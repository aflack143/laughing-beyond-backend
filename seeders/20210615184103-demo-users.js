'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
          name: "Julia Christensen",
          email: "julia",
          username: "julia",
          password: "julia",
          img: " "
      },
      {
          name: "Andrea Clark",
          email: "andrea",
          username: "andrea",
          password: "andrea",
          img: "img"
      }
      
  ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
