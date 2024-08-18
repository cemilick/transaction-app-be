'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('transactions', 'amount', {
      type: Sequelize.FLOAT,
      allowNull: false
    });

    await queryInterface.changeColumn('wallets', 'balance', {
      type: Sequelize.FLOAT,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('transactions', 'amount', {
      type: Sequelize.INTEGER,
      allowNull: false
    });

    await queryInterface.changeColumn('wallets', 'balance', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }
};
