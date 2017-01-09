// server.js
const seneca = require('seneca')()
const express = require('express')
const Router = express.Router()
const PORT = 3000

seneca
.use('api')
.use('seneca-web', {
  adapter: 'express',
  context: express(),//require('./app.js'),
  routes: require('./routes.js'),
  adapter: require('seneca-web-adapter-express')
})
.ready(() => {
  const server  = seneca.export('web/context')()
  server.listen(PORT, function () {
    console.log('listening to seneca on port *:' + PORT)
  })
})

// Reference:
// http://senecajs.org/getting-started/