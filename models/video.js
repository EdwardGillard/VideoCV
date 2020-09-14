const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  videoUrl: { type: String, required: true, unique: true },
  thumbnail: { type: String },
  info: { type: String, maxlength: 400 },
  techStack: { type: String },
  title: { type: String, required: true, maxlength: 50 },
  orderNumber: { type: Number }
}, { 
  timestamps: true 
})

module.exports = mongoose.model('Video', videoSchema)