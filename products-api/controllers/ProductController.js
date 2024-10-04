const http = require("http");
const categoryRepository = require("../repositories/categoryRepository");
const productRepository = require("../repositories/productRepository");

class ProductController {
  static async createProduct(req, res) {
    const { name, desc, image, category_id } = req.body;

    try {
      const categoryExists = await categoryRepository.findById(category_id);
      if (!categoryExists) {
        return res.status(400).json({
          status: http.STATUS_CODES[400],
          message: "Invalid category ID. Category does not exist.",
        });
      }

      const product = await productRepository.create({
        name,
        desc,
        image,
        category_id,
      });

      res.status(201).json({
        status: http.STATUS_CODES[201],
        message: "Product created successfully.",
        product: product,
      });
    } catch (error) {
      res.status(500).json({
        status: http.STATUS_CODES[500],
        message: "An error occurred while creating the product.",
        error: error.message,
      });
    }
  }

  static async getProducts(req, res) {
    try {
      const products = await productRepository.findAll();
      res.status(200).json({
        status: http.STATUS_CODES[200],
        message: "Products retrieved successfully.",
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        status: http.STATUS_CODES[500],
        message: "An error occurred while retrieving products.",
        error: error.message,
      });
    }
  }

  static async getProductById(req, res) {
    try {
      const product = await productRepository.findById(req.params.id);
      if (product) {
        res.status(200).json({
          status: http.STATUS_CODES[200],
          message: "Product retrieved successfully.",
          data: product,
        });
      } else {
        res.status(404).json({
          status: http.STATUS_CODES[404],
          message: "Product not found.",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: http.STATUS_CODES[500],
        message: "An error occurred while retrieving the product.",
        error: error.message,
      });
    }
  }

  static async updateProduct(req, res) {
    const { name, desc, image, category_id } = req.body;

    try {
      const updated = await productRepository.update(req.params.id, {
        name,
        desc,
        image,
        category_id,
      });

      if (updated) {
        const updatedProduct = await productRepository.findById(req.params.id);
        res.status(200).json({
          status: http.STATUS_CODES[200],
          message: "Product updated successfully.",
          data: updatedProduct,
        });
      } else {
        res.status(404).json({
          status: http.STATUS_CODES[404],
          message: "Product not found.",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: http.STATUS_CODES[500],
        message: "An error occurred while updating the product.",
        error: error.message,
      });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const deleted = await productRepository.delete(req.params.id);
      if (deleted) {
        res.status(200).json({
          status: http.STATUS_CODES[200],
          message: "Product deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: http.STATUS_CODES[404],
          message: "Product not found.",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: http.STATUS_CODES[500],
        message: "An error occurred while deleting the product.",
        error: error.message,
      });
    }
  }
}

module.exports = ProductController;
