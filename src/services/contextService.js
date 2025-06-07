const db = require('../config/db');
const Context = require('../models/context');

// Create a new context
const createContext = async (contextData) => {
    return await Context.create(contextData);
};

// Get all contexts for a user
const getContextsByUserId = async (userId) => {
    return await Context.find({ userId });
};

// Get a context by ID
const getContextById = async (id, userId) => {
    return await Context.findOne({ _id: id, userId });
};

// Update a context
const updateContext = async (id, userId, updateData) => {
    return await Context.findOneAndUpdate(
        { _id: id, userId },
        updateData,
        { new: true }
    );
};

// Delete a context
const deleteContext = async (id, userId) => {
    return await Context.findOneAndDelete({ _id: id, userId });
};

module.exports = {
    createContext,
    getContextsByUserId,
    getContextById,
    updateContext,
    deleteContext,
};