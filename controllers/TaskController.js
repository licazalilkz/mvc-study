const Task = require("../models/Task");

module.exports = class TaskController {
  static CreateTask(_req, res) {
    res.render("tasks/create");
  }
  static async CreateTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };
    await Task.create(task);
    res.redirect("/tasks");
  }
  static async showTasks(_req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }
};
