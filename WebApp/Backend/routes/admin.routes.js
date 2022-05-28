const express = require("express");
const { Router } = express;
const controller = require("../controllers/admin/admin.controller");
const { dashboardCounts, getAllUsers } = controller;

const router = Router();

/**
 * Get Dashbord Counts
 */
router.get("/count", dashboardCounts);

/**
 * Get All Users
 */
router.get("/all-users", getAllUsers);

module.exports = router;
