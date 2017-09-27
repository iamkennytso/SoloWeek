const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')
let app = express();
let port = process.env.PORT || 1203

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})
