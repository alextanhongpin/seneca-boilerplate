const seneca = require('./seneca.js')

seneca.ready(() => {
  const server  = seneca.export('web/context')()
  server.listen(3000, function () {
    console.log('listening to seneca server')
  })
})
