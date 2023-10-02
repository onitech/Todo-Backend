const Task = require('../models/Task')

const TaskController = {
  testServer(req, res) {
    res.status(200).json('success');
  },

  async createTask(req, res) {
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  
  async getAllTask(req, res) {
    try {
      const allTasks = await Task.find();
      res.status(200).json(allTasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  async updateTask(req, res) {
    try {
      const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updateTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  
  async deleteTask(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
}

module.exports = TaskController;