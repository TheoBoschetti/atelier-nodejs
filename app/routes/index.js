module.exports = app => {
  app.use('/dog', require('./dog'))
}
