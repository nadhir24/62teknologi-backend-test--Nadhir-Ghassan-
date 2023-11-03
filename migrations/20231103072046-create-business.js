'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      term: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      radius: {
        type: Sequelize.FLOAT
      },
      categories: {
        type: Sequelize.STRING
      },
      locale: {
        type: Sequelize.STRING
      },
      limit: {
        type: Sequelize.INTEGER
      },
      offset: {
        type: Sequelize.INTEGER
      },
      sort_by: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      open_now: {
        type: Sequelize.BOOLEAN
      },
      open_at: {
        type: Sequelize.INTEGER
      },
      attributes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('businesses');
  }
};