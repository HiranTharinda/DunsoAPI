const taskService = require('../services/taskService');

exports.createTask = async (req, res) => {
  try {
    const task = await taskService.createTask({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  const tasks = await taskService.getTasksByUser(req.user.id);
  res.json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await taskService.getTaskById(req.params.id, req.user.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await taskService.updateTask(req.params.id, req.user.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Task not found' });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  const deleted = await taskService.deleteTask(req.params.id, req.user.id);
  if (!deleted) return res.status(404).json({ message: 'Task not found' });
  res.json({ message: 'Task deleted' });
};