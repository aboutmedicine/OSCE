const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Osce =require('./models/osce');

// Connect to Mongoose
mongoose.connect('mongodb://heroku_ngp18hw5:1tugpol7mp69699upne6a4a1hn@ds223653.mlab.com:23653/heroku_ngp18hw5');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/osces');
});

app.get('/api/osces', (req, res) => {
	Osce.getOsces((err, osces) => {
		if(err){
			throw err;
		}
		res.json(osces);
	});
});

app.get('/api/osces/:_id', (req, res) => {
	Osce.getOsceById(req.params._id, (err, osce) => {
		if(err){
			throw err;
		}
		res.json(osce);
	});
});

app.post('/api/osces', (req, res) => {
	var osce = req.body;
	Osce.addOsce(osce, (err, osce) => {
		if(err){
			throw err;
		}
		res.json(osce);
	});
});

app.put('/api/osces/:_id', (req, res) => {
	var id = req.params._id;
	var osce = req.body;
	Osce.updateOsce(id, osce, {}, (err, osce) => {
		if(err){
			throw err;
		}
		res.json(osce);
	});
});

app.delete('/api/osces/:_id', (req, res) => {
	var id = req.params._id;
	Osce.removeOsce(id, (err, osce) => {
		if(err){
			throw err;
		}
		res.json(osce);
	});
});

// Heroku PORT

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.listen(3000);
console.log('Running on port 3000...');
