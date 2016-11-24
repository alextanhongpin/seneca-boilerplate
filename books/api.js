const express = require('express')
const router = express.Router()

require('./route.js').forEach((r) => {
  router[r.method](r.path, r.action)
})

module.exports = router