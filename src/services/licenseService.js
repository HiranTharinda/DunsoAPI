const License = require('../models/license');

async function getLicenseByKey(key) {
  return await License.findOne({ key });
}

async function getLicensesByUser(userId) {
  return await License.find({ userId });
}

async function createLicense(licenseData) {
  return await License.create(licenseData);
}

async function updateLicense(id, updateData) {
  return await License.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteLicense(id) {
  return await License.findByIdAndDelete(id);
}

module.exports = {
  getLicenseByKey,
  getLicensesByUser,
  createLicense,
  updateLicense,
  deleteLicense,
};