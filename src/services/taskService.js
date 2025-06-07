const db = require('../config/db');
const Task = require('../models/task');
const Context = require('../models/context');

async function getTasksByUser(userId) {
  return await Task.find({ userId });
}

async function getTaskById(id, userId) {
  return await Task.findOne({ _id: id, userId });
}

async function createTask(taskData) {
  return await Task.create(taskData);
}

async function updateTask(id, userId, updateData) {
  return await Task.findOneAndUpdate(
    { _id: id, userId },
    updateData,
    { new: true }
  );
}

async function deleteTask(id, userId) {
  return await Task.findOneAndDelete({ _id: id, userId });
}

module.exports = {
  getTasksByUser,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};