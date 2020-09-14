const User = require('../models/user')
const Video = require('../models/video')

//* Create New video
//! Working ? No
//! Errors Tested ? No

async function createNewVideo(req,res,next) {
  try {
    const user = await User.findById(req.params.userId)
    req.body.owner = req.currentUser
    user.createdVideos.push(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err){
    next(err)
  }
}

//* Delete video
//! Working ? No
//! Errors Tested ? No

async function deleteVideo(req,res,next) {
  try {
    const user = await User.findById(req.params.userId)
    if (!user.equals(req.currentUser._id)) {
      throw new Error('Not authorized to do this')
    }
    const videoToDelete = await Video.findById(req.params.videoId)
    if (!videoToDelete) {
      throw new Error('Not Found')
    }
    await videoToDelete.remove()
    res.status(204)
  } catch (err){
    next(err)
  }
}

//* Edit video
//! Working ? No
//! Errors Tested ? No

async function editVideo(req,res,next) {
  try {
    const videoToEdit = await Video.findById(req.params.VideoId)
    if (!videoToEdit) {
      throw new Error('Not Found')
    }
    if (!videoToEdit.owner.equals(req.currentUser._id)){
      throw new Error('Not authorized to do this')
    }
    Object.assign(videoToEdit, req.body)
    await videoToEdit.save()
    res.status(202).json(videoToEdit)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createNewVideo,
  deleteVideo,
  editVideo
}