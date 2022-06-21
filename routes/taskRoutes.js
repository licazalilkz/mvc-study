const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.get("/add", TaskController.CreateTask);
router.get("/", TaskController.showTasks);

module.exports = router;
