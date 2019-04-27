const electron = require('electron')
const url = require('url')
const path = require('path')
const post = require('../../server/model/post.js')
const Mustache = require('mustache')
const $ = require('jquery')
const BrowserWindow = electron.remote.BrowserWindow

$(document).ready(function() {
	const templates = {
		tableBox: $('#table-box').html()
	}

	const addItem = document.querySelector('.js-add-item')
	const itemNameInput = document.querySelector('.js-item-name-input')
	const itemDescriptionInput = document.querySelector('.js-item-description-input')
	const itemTotalQuantityInput = document.querySelector('.js-total-quantity-input')
	const itemInventoryQuantityInput = document.querySelector('.js-inventory-quantity-input')

	addItem.addEventListener('click', onClickAddNewItem)

	render()


	function onClickAddNewItem() {
		let item = {
			itemName: itemNameInput.value,
			itemDescription: itemDescriptionInput.value,
			itemTotalQuantity: itemTotalQuantityInput.value,
			itemavailableQuantity: itemInventoryQuantityInput.value
		}

		if(!item.itemName || !item.itemDescription || !item.itemTotalQuantity || !item.itemavailableQuantity) {
			alert('Preencha todos os campos!')
			return
		}

		post.createItem(item, function (response) {
			if (response) {
				alert('Criado com Sucesso!')
			} else {
				alert('ERRO')
			}
			render()
		})
	}

	function render() {
		post.getAllItems(function (response) {
			let items = response
			let table = Mustache.render(templates.tableBox, items)

			$('.table-box-container').html(table)
		})
	}
})


