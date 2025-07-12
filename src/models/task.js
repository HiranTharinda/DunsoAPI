const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  percentComplete: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  contextId: { type: mongoose.Schema.Types.ObjectId, ref: 'Context' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
  isRecurring: { type: Boolean, default: false },
  recurrenceRule: { type: String },
});

module.exports = mongoose.model('Task', taskSchema);