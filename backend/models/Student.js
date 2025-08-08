const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional link if created as user
  admissionNo: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date },
  className: { type: String }, // e.g., 9A
  section: { type: String },
  parentEmails: [{ type: String }],
  meta: { type: Object }, // dynamic fields
  createdAt: { type: Date, default: Date.now }
});

StudentSchema.index({ school: 1, admissionNo: 1 }, { unique: true });

module.exports = mongoose.model('Student', StudentSchema);
