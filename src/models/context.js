const mongoose = require('mongoose');

const contextSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Context', contextSchema);