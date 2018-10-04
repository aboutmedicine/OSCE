const mongoose = require('mongoose');

// Osce Schema
const osceSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	topic:{
		type: String,
		required: true
	},
	name:{
		type: String
	},
	age:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Osce = module.exports = mongoose.model('Osce', osceSchema);

// Get Osces
module.exports.getOsces = (callback, limit) => {
	Osce.find(callback).limit(limit);
}

// Get Osce
module.exports.getOsceById = (id, callback) => {
	Osce.findById(id, callback);
}

// Add Osce
module.exports.addOsce = (osce, callback) => {
	Osce.create(osce, callback);
}

// Update Osce
module.exports.updateOsce = (id, osce, options, callback) => {
	var query = {_id: id};
	var update = {
		title: osce.title,
		topic: osce.topic,
		name: osce.name,
		age: osce.age
	}
	Osce.findOneAndUpdate(query, update, options, callback);
}

// Delete Osce
module.exports.removeOsce = (id, callback) => {
	var query = {_id: id};
	Osce.remove(query, callback);
}
