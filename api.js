module.exports = function (options) {

  const seneca = this

  seneca.add('role:api,path:index', function (args, done) {
    done(null,{ message: 'Awesome app is running' })
  })
  seneca.add('role:api,path:users', function (args, done) {
    done(null,{ users: 'john.doe' })
  })

  // seneca.add('init:api', function (args, done) {
  //   console.log('api route')
  //   done()
  // })
  // seneca.wrap('role:api', function (args, done) {
  //   seneca.prior(args, done)
  // })
}