const User = require('../models/user');

async function createUser({ email, passwordHash = null }) {
  const user = new User({
    email,
    passwordHash,
  });
  return await user.save();
}

async function getUserById(id) {
  return await User.findById(id);
}

async function getUserByEmail(email) {
  return await User.findOne({ email });
}

async function updateUser(id, updateData) {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail
};