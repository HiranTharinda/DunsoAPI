const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await UserService.getUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await UserService.deleteUser(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCurrentUser = async (req, res) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.updateCurrentUser = async (req, res) => {
  const updatedUser = await userService.updateUser(req.user.id, req.body);
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  res.json(updatedUser);
};

exports.deleteCurrentUser = async (req, res) => {
  const deletedUser = await userService.deleteUser(req.user.id);
  if (!deletedUser) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
};