const { Product, Category } = require("../models");

class ProductRepository {
  static async create(productData) {
    return await Product.create(productData);
  }

  static async findAll() {
    return await Product.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });
  }

  static async findById(id) {
    return await Product.findByPk(id, {
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });
  }

  static async update(id, productData) {
    const [updated] = await Product.update(productData, {
      where: { id },
    });
    return updated;
  }

  static async delete(id) {
    return await Product.destroy({
      where: { id },
    });
  }
}

module.exports = ProductRepository;
