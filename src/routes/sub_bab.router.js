
const express = require("express");

const router = express.Router();

const { verifyToken } = require("../middlewares/auth");
const { index } = require("../controllers/sub_bab.controller");

router.get("/", verifyToken, index);

module.exports = router;
