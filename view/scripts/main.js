const electron = require('electron')
const url = require('url')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

let contractWindow

let contract = document.querySelector('.js-actions-contract') 
let operations = document.querySelector('.js-actions-operations') 
let inventory = document.querySelector('.js-actions-inventory') 
let client = document.querySelector('.js-actions-client')

contract.addEventListener('click', loadContractWindow)
operations.addEventListener('click', loadOperationsWindow)
inventory.addEventListener('click', loadInvetoryWindow)
client.addEventListener('click', loadClientsWindow)


function loadContractWindow() {
	contractWindow = new BrowserWindow({
		title: "Novo Contrato",
		width: 1350,
		height: 800
	})

	contractWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../pages/contract.html'),
		protocol: 'file:',
		slashes: true
	}))
}

function loadOperationsWindow() {
	contractWindow = new BrowserWindow({
		title: "Operações",
		width: 1350,
		height: 800
	})

	contractWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../pages/operations.html'),
		protocol: 'file:',
		slashes: true
	}))
}

function loadInvetoryWindow() {
	contractWindow = new BrowserWindow({
		title: "Estoque",
		width: 1350,
		height: 800
	})

	contractWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../pages/inventory.html'),
		protocol: 'file:',
		slashes: true
	}))
}

function loadClientsWindow() {
	contractWindow = new BrowserWindow({
		title: "Clientes",
		width: 1350,
		height: 800
	})

	contractWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../pages/clients.html'),
		protocol: 'file:',
		slashes: true
	}))
}