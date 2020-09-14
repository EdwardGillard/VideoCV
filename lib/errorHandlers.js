const { notFound, unauthorized } = require('./errorMessages')

function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    const newErrors = {}
    for (const key in err.errors) {
      newErrors[key] = err.errors[key].message
    }
    return res.status(422).json(newErrors)
  }

  if (err.message === notFound ) {
    return res.status(404).json({ message: notFound })
  }

  if (err.message === unauthorized) {
    return res.status(401).json({ message: unauthorized })
  }
  
  res.SendStatus(500)
  next(err)
}

module.exports = errorHandler