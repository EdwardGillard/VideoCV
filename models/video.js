const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  videoUrl: { type: String, required: true, unique: true },
  thumbnail: { type: String },
  info: { type: String, maxlength: 400 },
  techStack: { type: String },
  title: { type: String, required: true, maxlength: 50 },
  orderNumber: { type: Number },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { 
  timestamps: true 
})

module.exports = mongoose.model('Video', videoSchema)