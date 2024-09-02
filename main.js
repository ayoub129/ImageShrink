const {app , BrowserWindow} = require('electron');

let MainWindow;

function createMainWindow() {
    MainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600
    })

    MainWindow.loadURL(`file://${__dirname}/app/index.html`)
    // MainWindow.loadFile('./app/index.html')
}

app.on('ready' , createMainWindow)