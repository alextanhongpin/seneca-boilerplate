module.exports = require('seneca')()
.use('api')
.use('seneca-web', {
  adapter: 'express',
  context: require('./app.js'),
  routes: require('./routes.js'),
  adapter: require('seneca-web-adapter-express')
})
