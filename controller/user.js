const sequelize = require("sequelize");
const db = require("../models");

const userController = {
  createUser: async (req, res) => {
    const body = req.body;
    try {
      const User = await db.data_user.create(body);

      res.status(201).json({
        ResponseCode: "00",
        ResponseDesc: User,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getUsers: async (req, res) => {
    try {
      const User = await db.data_user.findAll({
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });

      if (User.length == 0) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: User,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getUser: async (req, res) => {
    const { User_id } = req.params;
    try {
      const User = await db.data_user.findOne({
        where: {
          User_id,
        },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });
      if (!User) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: User,
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (req, res) => {
    const { User_id } = req.params;
    const { user_id, ...body } = req.body;
    try {
      const checkUpdate = await db.data_user.update(body, {
        where: {
          User_id,
        },
      });

      if (checkUpdate[0] != 1) {
        return res.status(500).json({
          ResponseCode: "01",
          ResponseDesc: "Failed to update product",
        });
      }

      const updatedUser = await db.data_user.findByPk(User_id, {
        where: {
          User_id,
        },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });

      res.status(201).json({
        ResponseCode: "00",
        ResponseDesc: updatedUser,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (req, res) => {
    const { User_id } = req.params;
    try {
      const User = await db.data_user.destroy({
        where: {
          User_id,
        },
      });

      if (!User) {
        return res.status(404).json({
          ResponseCode: "01",
          ResponseDesc: {},
        });
      }

      res.status(200).json({
        ResponseCode: "00",
        ResponseDesc: "User successfully deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
