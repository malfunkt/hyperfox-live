var packager = require('electron-packager')
var logger = require('../server/logger')

var platform
if (process.argv.indexOf('-p') !== -1) {
  platform = process.argv[process.argv.indexOf('-p') + 1]
}

var packageOptions = {
  dir: './',
  name: 'Hyperfox',
  platform: platform,
  out: './releases',
  overwrite: true,
  icon: './electron/hyperfox-icon.icns',
  ignore: [
    'app',
    'coverage',
    'releases',
    'internals',
    'server',
    'node_modules'
  ]
}

packager(packageOptions, function doneCallback (err, appPaths) {
  if (err) {
    logger.error(err.message)
  }
  if (appPaths !== undefined) {
    logger.electron(appPaths)
  }
})
