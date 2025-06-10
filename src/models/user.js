const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  avatar: { type: String, required: false },
  colorMode: { type: String, enum: ['light', 'dark'], default: 'light' },
  nickName: { type: String, required: false },
  workingStyle: { type: String, required: false },
  workWeek: { type: Array, required: false },
  workingHours: { type: String, required: false },
  householdChores: { type: Array, required: false },
  profession: { type: String, required: false },
  likeReminders: { type: Boolean, default: true },
  likeNotifications: { type: Boolean, default: true },
  isNewUser: { type: Boolean, default: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);