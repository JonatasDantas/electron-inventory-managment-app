const electron = require('electron')
const url = require('url')
const path = require('path')
const post = require('../../server/model/post.js')
const Mustache = require('mustache')
const $ = require('jquery')
const BrowserWindow = electron.remote.BrowserWindow

$(document).ready(function() {

	const templates = {
		clientsBox: $('#clein')
	}

	function render() {
		post.getAllClients(function (response) {
			let clients = response


		})
	}
})