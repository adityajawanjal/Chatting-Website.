const express = require("express");
const { newConversation } = require("../controllers/message-controller");
const { addUser, getAllusers } = require("../controllers/user-controller");

const router = express.Router();

router.post("/add",addUser);
router.get("/users",getAllusers);
router.post("/conversation/add",newConversation);

module.exports = router;