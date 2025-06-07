const db = require('../config/db');
const Habit = require('../models/habit');

async function createHabit(habitData) {
  return await Habit.create(habitData);
}

async function getHabitsByUser(userId) {
  return await Habit.find({ userId });
}

async function getHabitById(id, userId) {
  return await Habit.findOne({ _id: id, userId });
}

async function updateHabit(id, userId, updateData) {
  return await Habit.findOneAndUpdate(
    { _id: id, userId },
    updateData,
    { new: true }
  );
}

async function deleteHabit(id, userId) {
  return await Habit.findOneAndDelete({ _id: id, userId });
}

module.exports = {
  createHabit,
  getHabitsByUser,
  getHabitById,
  updateHabit,
  deleteHabit,
};