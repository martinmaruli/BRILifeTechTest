const sequelize = require("sequelize");
const db = require("../models");

const productController = {
  createProduct: async (req, res) => {
    const body = req.body;
    try {
      const product = await db.data_product.create(body);

      res.status(201).json({
        ResponseCode: "00",
        ResponseDesc: product,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getProducts: async (req, res) => {
    try {
      const product = await db.data_product.findAll({
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });

      if (product.length == 0) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: product,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getProduct: async (req, res) => {
    const { product_id } = req.params;
    try {
      const product = await db.data_product.findOne({
        where: {
          product_id,
        },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });
      if (!product) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: product,
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateProduct: async (req, res) => {
    const { product_id } = req.params;
    const body = req.body;
    try {
      const checkUpdate = await db.data_product.update(body, {
        where: {
          product_id,
        },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });

      if (checkUpdate[0] != 1) {
        return res.status(500).json({
          ResponseCode: "01",
          ResponseDesc: "Failed to update Product",
        });
      }

      const updatedProduct = await db.data_product.findByPk(product_id, {
        where: {
          product_id,
        },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });

      res.status(201).json({
        ResponseCode: "00",
        ResponseDesc: updatedProduct,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: async (req, res) => {
    const { product_id } = req.params;
    try {
      const product = await db.data_product.destroy({
        where: {
          product_id,
        },
      });

      if (!product) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: "Product successfully deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productController;
