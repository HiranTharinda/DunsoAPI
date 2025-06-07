const License = require('../models/license');
const User = require('../models/user');
const licenseService = require('../services/licenseService');

// Create a new license for a user
exports.createLicense = async (req, res) => {
    try {
        // Attach userId from authenticated user
        const license = await licenseService.createLicense({
            ...req.body,
            userId: req.user.id,
        });
        res.status(201).json(license);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get license information for a user
exports.getLicense = async (req, res) => {
    try {
        const { userId } = req.params;
        const license = await License.findOne({ userId });
        if (!license) {
            return res.status(404).json({ message: 'License not found' });
        }
        res.status(200).json(license);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving license', error });
    }
};

// Update license tier for a user
exports.updateLicense = async (req, res) => {
    try {
        const { userId } = req.params;
        const { tier } = req.body;
        const license = await License.findOneAndUpdate({ userId }, { tier }, { new: true });
        if (!license) {
            return res.status(404).json({ message: 'License not found' });
        }
        res.status(200).json({ message: 'License updated successfully', license });
    } catch (error) {
        res.status(500).json({ message: 'Error updating license', error });
    }
};