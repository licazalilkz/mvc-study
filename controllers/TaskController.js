const Task = require("../models/Task");

module.exports = class TaskController {
  static CreateTask(_req, res) {
    res.render("task/create");
  }
};
