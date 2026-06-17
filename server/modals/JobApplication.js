const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  dateApplied: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['applied', 'interview', 'rejected', 'offer'],
    default: 'applied'
  },
  jobLink: { type: String },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobApplicationSchema);