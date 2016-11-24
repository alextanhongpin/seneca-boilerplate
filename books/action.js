const action = (req, res) => {
  console.log('at the special route')
  res.status(200).json({
    message: 'at special route'
  })
}

module.exports = action