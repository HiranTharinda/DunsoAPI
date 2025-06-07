const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  frequency: { type: String, required: true }, // e.g., 'daily', 'weekly'
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  completedDates: [{ type: Date }]
});

module.exports = mongoose.model('Habit', habitSchema);