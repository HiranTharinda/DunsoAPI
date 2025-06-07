const habitService = require('../services/habitService');

// Create a new habit
exports.createHabit = async (req, res) => {
    try {
        const habit = await habitService.createHabit({
            ...req.body,
            userId: req.user.id,
        });
        res.status(201).json(habit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all habits for a specific user
exports.getHabitsByUser = async (req, res) => {
    const habits = await habitService.getHabitsByUser(req.user.id);
    res.json(habits);
};

// Get a habit by ID
exports.getHabitById = async (req, res) => {
    const habit = await habitService.getHabitById(req.params.id, req.user.id);
    if (!habit) return res.status(404).json({ message: 'Habit not found' });
    res.json(habit);
};

// Update a habit
exports.updateHabit = async (req, res) => {
    const updated = await habitService.updateHabit(req.params.id, req.user.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Habit not found' });
    res.json(updated);
};

// Delete a habit
exports.deleteHabit = async (req, res) => {
  const deleted = await habitService.deleteHabit(req.params.id, req.user.id);
  if (!deleted) return res.status(404).json({ message: 'Habit not found' });
  res.json({ message: 'Habit deleted' });
};