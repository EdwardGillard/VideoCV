const router = require('express').Router()
const auth = require('../controllers/auth')
const video = require('../controllers/video')
const user = require('../controllers/user')
const secureRoute = require('../lib/secureRoute')

//? Auth Routes
//* Register
router.route('/register')
  .post(auth.register)

//* Login
router.route('/login')
  .post(auth.login)

//? Video Routes
router.route('/video')
  .post(secureRoute, video.createNewVideo)
<<<<<<< HEAD
  .put(secureRoute, video.editVideo)
  
router.route('/video/:videoid')
  .get(video.getSingleVideo)
  .delete(secureRoute, video.deleteVideo)
=======

router.route('/video/:videoid')
  .get(video.getSingleVideo)
  .delete(secureRoute, video.deleteVideo)
  .put(secureRoute, video.editVideo)
>>>>>>> eddafba01c880e6e0ad92d817312e3e7357d6016

//? User Routes
router.route('/profile')
  .get(secureRoute, user.getUserProfile)
  .put(secureRoute, user.userUpdate)

module.exports = router