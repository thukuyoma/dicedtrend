const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255,
		min: 6,
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6,
	},
	avatar: {
		type: String,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	resetLink: {
		type: String,
		default: '',
	},
});

module.exports = mongoose.model('User', userSchema);
