const express = require('express')
const app = express()
const post = require('./model/post')

app.get('/posts', function(req, res) {

})

app.listen(3000, function() {
	console.log('Server is running')
})