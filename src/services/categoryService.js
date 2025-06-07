const db = require('../config/db');
const Category = require('../models/category');

async function createCategory(categoryData) {
  return await Category.create(categoryData);
}

async function getCategoriesByUser(userId) {
  return await Category.find({ userId });
}

async function getCategoryById(id, userId) {
  return await Category.findOne({ _id: id, userId });
}

async function updateCategory(id, userId, updateData) {
  return await Category.findOneAndUpdate(
    { _id: id, userId },
    updateData,
    { new: true }
  );
}

async function deleteCategory(id, userId) {
  return await Category.findOneAndDelete({ _id: id, userId });
}

module.exports = {
  createCategory,
  getCategoriesByUser,
  getCategoryById,
  updateCategory,
  deleteCategory,
};