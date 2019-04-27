const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow, Menu} = electron

let mainWindow

app.on('ready', function(){
// Listen for app to be ready.
	// Create new Window.
	mainWindow = new BrowserWindow({})
	// Load HTML file into window.
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '/view/pages/main.html'),
		protocol: 'file:',
		slashes: true
	}))
	mainWindow.maximize()

	mainWindow.on('closed', function() {
		app.quit()
	})

	let server = require('./server/server.js')

	// Building menu
//	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)

//	Menu.setApplicationMenu(mainMenu)
})

// Menu template

const mainMenuTemplate = [
	{
		label:'File',
		submenu:[
		{
			label: "Add Item"
		},
		{
			label: "Clear Items"
		},
		{
			label: "Quit",
			accelerator: process.platform == 'darwin' ? 'Command+Q' : "Ctrl+Q",
			click(){
				app.quit()
			}
		}
		]
	}
]