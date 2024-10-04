"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Smartphone",
          desc: "High-end smartphone with 128GB storage and 5G connectivity.",
          image: "smartphone.jpg",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wireless Earbuds",
          desc: "Compact and ergonomic wireless earbuds with noise cancellation.",
          image: "wireless-earbuds.jpg",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "4K Ultra HD TV",
          desc: "55-inch 4K Ultra HD television with HDR support and smart functionality.",
          image: "4k-tv.jpg",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop",
          desc: "15-inch laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.",
          image: "laptop.jpg",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smartwatch",
          desc: "Fitness tracking smartwatch with heart rate monitor and GPS.",
          image: "smartwatch.jpg",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gaming Console",
          desc: "Next-gen gaming console with 4K support and an extensive game library.",
          image: "gaming-console.jpg",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bluetooth Speaker",
          desc: "Portable Bluetooth speaker with 10 hours of battery life.",
          image: "bluetooth-speaker.jpg",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coffee Maker",
          desc: "12-cup programmable coffee maker with a built-in grinder.",
          image: "coffee-maker.jpg",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sofa Set",
          desc: "Luxurious 5-seater sofa set for living room.",
          image: "sofa-set.jpg",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Winter Jacket",
          desc: "Stylish and warm winter jacket for cold weather.",
          image: "winter-jacket.jpg",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
