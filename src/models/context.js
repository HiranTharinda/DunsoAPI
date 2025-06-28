const mongoose = require('mongoose');

const contextSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String },
  color: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Context', contextSchema);