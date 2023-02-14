const express = require("express");
const { addUser, getAllusers } = require("../controllers/user-controller");

const router = express.Router();

router.post("/add",addUser);
router.get("/users",getAllusers);

module.exports = router;