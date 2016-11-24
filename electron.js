const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    title: 'Hyperfox',
    icon: path.join(__dirname, '/electron/hyperfox-icon.ico')
  })
  mainWindow.loadURL(`file://${__dirname}/build/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('close-main-window', function () {
  app.quit()
})
