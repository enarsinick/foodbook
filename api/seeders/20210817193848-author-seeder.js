'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      userId: 1,
      firstName: "Nick",
      lastName: "Cave",
      emailAddress: "nxdmedia@googlemail.com",
      password: "12343234",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  }
};