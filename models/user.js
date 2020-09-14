const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50 },
  linkedIn: { type: String },
  github: { type: String },
  portfolio: { type: String },
  password: { type: String, required: true, unique: true },
  profileImg: { type: String },
  gender: { type: String, require: true, enum: ['Male', 'Female'] },
  tagLine: { type: String, maxlength: 200 },
  jobseeker: { type: Boolean, required: true }
})

//* Attaches created videos to user schema

userSchema.virtual('createdVideos', {
  ref: 'Video',
  localField: '_id',
  foreignField: 'user'
}, { toObject: { virtuals: true } } 
)

userSchema
  .set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      delete json.email
      return json
    }
  })


//* Password Validation

//* validate incoming passwords of users trying to login against their saved one in the db
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation 
  })

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'Password does not match')
    }
    next()
  })

//* Password Storage

userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

module.exports = mongoose.model('User', userSchema)