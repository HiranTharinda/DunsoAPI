const contextService = require('../services/contextService');

exports.createContext = async (req, res) => {
  try {
    const context = await contextService.createContext({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(context);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getContextsByUser = async (req, res) => {
  const contexts = await contextService.getContextsByUserId(req.user.id);
  res.json(contexts);
};

exports.getContextById = async (req, res) => {
  const context = await contextService.getContextById(req.params.id, req.user.id);
  if (!context) return res.status(404).json({ message: 'Context not found' });
  res.json(context);
};

exports.updateContext = async (req, res) => {
  const updated = await contextService.updateContext(req.params.id, req.user.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Context not found' });
  res.json(updated);
};

exports.deleteContext = async (req, res) => {
  const deleted = await contextService.deleteContext(req.params.id, req.user.id);
  if (!deleted) return res.status(404).json({ message: 'Context not found' });
  res.json({ message: 'Context deleted' });
};