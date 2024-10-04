const http = require("http");
const categoryRepository = require("../repositories/categoryRepository");

class CategoryController {
  static async createCategory(req, res) {
    const { name } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ message: "Category name is required." });
    }

    try {
      const existingCategory = await categoryRepository.findByName(name);
      if (existingCategory) {
        return res.status(400).json({ message: "Category already exists." });
      }

      const category = await categoryRepository.create({ name });
      res.status(201).json({
        data: {
          status: http.STATUS_CODES[201],
          message: "Category created successfully",
          category: category,
        },
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({
        message: "An error occurred while creating the category.",
        error: error.message,
      });
    }
  }

  static async getCategories(req, res) {
    try {
      const categories = await categoryRepository.findAll();
      res.status(200).json({
        data: {
          status: http.STATUS_CODES[200],
          message: "Categories retrieved successfully.",
          categories: categories,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while retrieving categories.",
        error: error.message,
      });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const category = await categoryRepository.findById(req.params.id);
      if (category) {
        res.status(200).json({
          data: {
            status: http.STATUS_CODES[200],
            message: "Category retrieved successfully.",
            category: category,
          },
        });
      } else {
        res.status(404).json({ message: "Category not found." });
      }
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while retrieving the category.",
        error: error.message,
      });
    }
  }

  static async updateCategory(req, res) {
    try {
      const updated = await categoryRepository.update(req.params.id, req.body);
      if (updated) {
        const updatedCategory = await categoryRepository.findById(
          req.params.id
        );
        res.status(200).json({
          data: {
            status: http.STATUS_CODES[200],
            message: "Category updated successfully.",
            category: updatedCategory,
          },
        });
      } else {
        res.status(404).json({ message: "Category not found." });
      }
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while updating the category.",
        error: error.message,
      });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const deleted = await categoryRepository.delete(req.params.id);
      if (deleted) {
        return res.status(200).json({
          message: "Category deleted successfully.",
        });
      } else {
        return res.status(404).json({ message: "Category not found." });
      }
    } catch (error) {
      console.error("Error details:", error);
      return res.status(500).json({
        message: "An error occurred while deleting the category.",
        error: error.message,
      });
    }
  }
}

module.exports = CategoryController;
