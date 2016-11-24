module.exports = [
  {
    prefix: '/api',
    pin: 'role:api,path:users',
    map: {
      users: true
    }
  },
  {
    prefix: '/api',
    pin: 'role:api,path:index',
    map: {
      index: true
    }
  }
] 