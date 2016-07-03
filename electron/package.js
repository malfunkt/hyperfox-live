var packager = require('electron-packager')
var packageOptions = {
  dir: './',
  name: 'Hyperfox',
  platform: 'darwin',
  out: './releases',
  overwrite: true,
  icon: './electron/hyperfox-icon.icns',
  ignore: [
    'app',
    'coverage',
    'releases',
    'internals',
    'server'
  ]
}

packager(packageOptions, function done_callback (err, appPaths) {
  if (err) {
    console.log('Error:', err)
  }
  console.log(appPaths)
})
