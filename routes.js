module.exports = [
  {
    // The base url for the service
    // E.g. http://localhost:3000/api/v2
    pin: 'role:api,path:users',
    prefix: '/api/v2',
    map: {
      // Map the action to the users route
      // E.g. http://localhost:3000/api/v2/users
      users: { GET: false }
    }
  },
  {
    pin: 'role:api,path:index',
    prefix: '/api/v1',
    map: {
      '/': true
    }
  }
] 