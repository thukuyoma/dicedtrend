const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsletterSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	activated: {
		type: Boolean,
	},
	activationToken: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
