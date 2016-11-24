const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello world'
  })
})


app.use(require('./books/api'))
app.use('/books', require('./middleware.js'))

app.listen(4000, function () {
  console.log('log')
})
module.exports = app