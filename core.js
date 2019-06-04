var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {  
  mainWindow = new BrowserWindow({width: 1660, height: 900, frame: false, icon: `./icon.ico`, title: ''});  
  mainWindow.loadFile('./assets/app.html');  
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });  
});