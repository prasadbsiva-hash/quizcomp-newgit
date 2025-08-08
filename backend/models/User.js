const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin','admin','teacher','student','parent','finance'], default: 'student' },
  profile: { type: Object }, // dynamic profile fields
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

// Ensure unique email per school
UserSchema.index({ school: 1, email: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);
