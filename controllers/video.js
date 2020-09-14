const User = require('../models/user')
const Video = require('../models/video')
const { notFound } = require('../lib/errorMessages')

//* Get video
//? Working ? Yes
//? Errors Tested ? Yes
async function getSingleVideo(req, res, next) {
  try {
    const video = await Video.findById(req.params.videoid)
    if (!video) throw new Error(notFound)
    res.status(200).json(video)
  } catch (err) {
    next(err)
  }
}

//* Create New video
//? Working ? Yes
//? Errors Tested ? Yes
async function createNewVideo(req,res,next) {
  try {
    req.body.user = req.currentUser
    const createdVideo = await Video.create(req.body)
    res.status(201).json(createdVideo)
  } catch (err) {
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
  getSingleVideo,
  createNewVideo,
  deleteVideo,
  editVideo
}