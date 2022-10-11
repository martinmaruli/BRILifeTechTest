const db = require("../models");
const sequelize = require("sequelize");

const transactionController = {
  createTransaction: async (req, res) => {
    const body = req.body;
    const trx = await db.sequelize.transaction();
    try {
      const product = await db.data_product.findByPk(body.product_id, {
        transaction: trx,
      });

      if (product) body.total_order = product.premium * body.qty_order;

      const User = await db.data_transaction.create(body, { transaction: trx });

      await trx.commit();

      res.status(201).json({
        ResponseCode: "00",
        ResponseDesc: User,
      });
    } catch (error) {
      await trx.rollback();
      console.log(error);
    }
  },

  getTransactions: async (req, res) => {
    try {
      const Transaction = await db.data_transaction.findAll({
        include: [
          {
            model: db.data_user,
            as: "user",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
          {
            model: db.data_product,
            as: "product",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
        ],
        attributes: {
          exclude: ["user_id", "product_id", "updatedAt", "createdAt"],
        },
      });

      if (Transaction.length == 0) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: Transaction,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getTransaction: async (req, res) => {
    const { Transaction_id } = req.params;
    try {
      const Transaction = await db.data_transaction.findOne({
        where: {
          trans_id: Transaction_id,
        },
        include: [
          {
            model: db.data_user,
            as: "user",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
          {
            model: db.data_product,
            as: "product",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
        ],
        attributes: {
          exclude: ["user_id", "product_id", "updatedAt", "createdAt"],
        },
      });
      if (!Transaction) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: Transaction,
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateTransaction: async (req, res) => {
    const { Transaction_id } = req.params;
    const body = req.body;
    const trx = await db.sequelize.transaction();
    try {
      const checkUpdate = await db.data_transaction.findOne({
        where: {
          trans_id: Transaction_id,
        },
      }, {transaction: trx});

      if (!checkUpdate) {
        return res.status(500).json({
          ResponseCode: "01",
          ResponseDesc: "Failed to update transacti",
        });
      }

      let product;

      if (body.product_id) {
        product = await db.data_product.findByPk(body.product_id, {transaction: trx})
      } else {
        product = await db.data_product.findByPk(checkUpdate.product_id, {transaction: trx})
      }

      const qty = body.qty_order ? Number(body.qty_order) : checkUpdate.qty_order;

      body.total_order = Number(qty) * product.premium;

      const update = await db.data_transaction.update(
        body,
        {
          where: {
            trans_id: Transaction_id
          }
        },
        {transaction: trx}
      );

        const currentData = await db.data_transaction.findByPk(Transaction_id)
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: currentData,
        });
      

      trx.commit()

    } catch (error) {
      trx.rollback()
      console.log(error);
    }
  },

  deleteTransaction: async (req, res) => {
    const { Transaction_id } = req.params;
    try {
      const Transaction = await db.data_transaction.destroy({
        where: {
          trans_id: Transaction_id,
        },
      });

      if (!Transaction) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: "Transaction successfully deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = transactionController;
