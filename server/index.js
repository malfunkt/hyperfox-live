const express = require('express')
const logger = require('./logger')

const argv = require('minimist')(process.argv.slice(2))
const setup = require('./middlewares/frontendMiddleware')
const resolve = require('path').resolve
const app = express()

// app.use('/api', myApi)

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
})

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message)
  }

  logger.appStarted(port)
})
