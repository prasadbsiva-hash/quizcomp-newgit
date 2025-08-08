const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // e.g., greenwood
  logoUrl: { type: String },
  primaryColor: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('School', SchoolSchema);
