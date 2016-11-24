const express = require('express')
const router = express.Router()


// Middleware that is specific to this router
router.use(function () {

})
router.get('/', (req, res) => {
  console.log('At rest routes')
})

router.post('/', (req, res) => {
  console.log('post')
})

// Soft delete
router.delete('/', (req, res) => {

})

router.put('/', (req, res) => {
  console.log('at put route')
})

module.exports = router