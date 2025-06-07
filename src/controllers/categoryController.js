const categoryService = require('../services/categoryService');

exports.createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCategoriesByUser = async (req, res) => {
  const categories = await categoryService.getCategoriesByUser(req.user.id);
  res.json(categories);
};

exports.getCategoryById = async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id, req.user.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
};

exports.updateCategory = async (req, res) => {
  const updated = await categoryService.updateCategory(req.params.id, req.user.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Category not found' });
  res.json(updated);
};

exports.deleteCategory = async (req, res) => {
  const deleted = await categoryService.deleteCategory(req.params.id, req.user.id);
  if (!deleted) return res.status(404).json({ message: 'Category not found' });
  res.json({ message: 'Category deleted' });
};