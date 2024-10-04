const { Category } = require("../models");

class CategoryRepository {
  static async create(categoryData) {
    return await Category.create(categoryData);
  }

  static async findAll() {
    return await Category.findAll();
  }

  static async findById(id) {
    return await Category.findByPk(id);
  }

  static async findByName(name) {
    return await Category.findOne({
      where: { name },
    });
  }

  static async update(id, categoryData) {
    const [updated] = await Category.update(categoryData, {
      where: { id },
    });
    return updated;
  }

  static async delete(id) {
    return await Category.destroy({
      where: { id },
    });
  }
}

module.exports = CategoryRepository;
