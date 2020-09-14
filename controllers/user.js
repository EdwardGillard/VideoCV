const User = require('../models/user')
// const Video = require('../models/video')
const { unauthorized } = require('../lib/errorMessages')

//* Get User profile
//? Working ? Yes
//? Errors Tested ? Yes
async function getUserProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(unauthorized)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//* Edit Profile
//! Working ? No
//! Errors Tested ? No
async function userUpdate(req, res, next) {
  try {
    req.body.user = req.currentUser
    const userId = req.currentUser
    const updatedProfile = await User.findByIdAndUpdate(userId, req.body, { new: true, runValidators: true, context: 'query' })
    if (!updatedProfile) throw new Error(unauthorized)
    res.status(202).json(updatedProfile)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUserProfile,
  userUpdate
}