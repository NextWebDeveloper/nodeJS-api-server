var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db'); 

var artistsController = require('./controllers/artists');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.send('Hello API');
})

app.get('/artists', artistsController.all)

app.get('/artists/:id', artistsController.findById)

app.post('/artists', artistsController.create)

app.put('/artists', artistsController.update)

app.delete('/artists', artistsController.delete)

db.connect('mongodb://localhost:27017/myapi', function(err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3012, function() {
		console.log('API app started');
	})
})