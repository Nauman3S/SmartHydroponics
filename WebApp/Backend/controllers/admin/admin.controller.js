const express = require("express");
const User = require("../../models/user.model");
const { Request, Response } = express;

/**
 * Send Dashboard counts
 * @param {Request} req - request object
 * @param {Response} res - response object
 */
exports.dashboardCounts = async (req, res) => {
  try {
    const users = await User.countDocuments({ role: "client" });

    return res.status(200).json({ users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `INTERNAL SERVER ERROR: ${error.message}` });
  }
};

/**
 * Get All Users
 * @param {Request} req - request object
 * @param {Response} res - response object
 */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "client" });
    return res.status(200).json({ users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `INTERNAL SERVER ERROR: ${error.message}` });
  }
};
