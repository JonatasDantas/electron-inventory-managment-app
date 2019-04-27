const db = require('electron-db');
const { app, BrowserWindow } = require("electron");
const path = require('path')

console.log(path.join(__dirname, '\\database'))

db.createTable('items', path.join(__dirname, '\\database'), (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})

db.createTable('clients', path.join(__dirname, '\\database'), (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})

db.createTable('orders', path.join(__dirname, '\\database'), (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})

function createItem(item, callback) {

	db.insertTableContent('items', path.join(__dirname, '\\database'), item, (succ, msg) => {
	  // succ - boolean, tells if the call is successful
	  if (succ) {
	  	return callback(true)
	  }
	  return callback(false)
	})
}

function editItem(item_id, item) {
	let where = {
		"id": item_id
	}

	db.updateRow('items', where, item, (succ, msg) => {
	  // succ - boolean, tells if the call is successful
	  console.log("Success: " + succ);
	  if (succ) {
	  	return true
	  }
	  return false
	});
}

function getAllItems(callback) {
	db.getAll('items', path.join(__dirname, '\\database'), (succ, data) => {

		items = {
			items: data
		}
		return callback(items)
	})
}

function createClient(client, callback) {

	db.insertTableContent('clients', path.join(__dirname, '\\database'), client, (succ, msg) => {
	  if (succ) {
	  	return callback(true)
	  }
	  return callback(false)
	})
}

function editClient(client_id, item) {
	let where = {
		"id": client_id
	}

	db.updateRow('items', where, item, (succ, msg) => {
	  // succ - boolean, tells if the call is successful
	  console.log("Success: " + succ);
	  if (succ) {
	  	return true
	  }
	  return false
	});
}


function getAllClients(callback) {
	db.getAll('clients', path.join(__dirname, '\\database'), (succ, data) => {
		clients = {
			clients: data
		}
		return callback(clients)
	})
}
module.exports = { createItem, getAllItems }
