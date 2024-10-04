"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Accessories",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Home Appliances",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Furniture",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
