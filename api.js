module.exports = function (options) {

  const seneca = this

  seneca.add('init:api', function (msg, done) {
    // This will be called once when initializing the role:api route
    console.log('intializing api route')
    done()
  })

  seneca.add('role:api, path:index', function (msg, done) {
    // msg.args.body - post parameters for the request
    // msg.args.query - querystring parameters for the request
    // msg.args.params - any route param replacements (e.g., :operation)
    console.log(msg.args.query)
    done(null, { message: 'Awesome app is running' })
  })

  seneca.add('role:api, path:users', function (msg, done) {
    console.log(msg.hello)
    done(null, { users: 'john.doe' })
  })

  seneca.wrap('role:api', function (msg, done) {
    // This will wrap all the api calls with role:api
    msg.hello = true
    this.prior(msg, done)
  })
}