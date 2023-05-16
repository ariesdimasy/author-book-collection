'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   await queryInterface.addColumn("authors","password",{ type: Sequelize.STRING })
   await queryInterface.addColumn("authors","birthdate",{ type: Sequelize.DATE })
   await queryInterface.addColumn("authors","biography",{ type:Sequelize.STRING })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   await queryInterface.removeColumn("authors","password")
   await queryInterface.removeColumn("authors","birthdate")
   await queryInterface.removeColumn("authors","biography")
  }
};
