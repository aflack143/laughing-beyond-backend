'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      // {
      //     name: "Julia Christensen",
      //     email: "julia",
      //     username: "julia",
      //     password: "julia",
      //     img: "https://i.pinimg.com/originals/69/d5/67/69d5671797cd35bd3ef3074436e942f1.png"
      // },
      // {
      //     name: "Andrea Clark",
      //     email: "andrea",
      //     username: "andrea",
      //     password: "andrea",
      //     img: ""
      // }
      
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
  }
};
