const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		min: 6,
		max: 100,
	},
	article: {
		type: String,
		required: true,
		min: 50,
		max: 2000,
	},
	user: {
		type: Schema.Types.ObjectId,
	},
	author: {
		type: String,
	},
	avatar: {
		type: String,
	},
	summary: {
		type: String,
		required: true,
		min: 6,
		max: 150,
	},
	viewCount: { type: Number },

	// slug: {},
	// likes: [],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
			},
			text: {
				type: String,
				required: true,
			},
			name: {
				type: String,
			},
			avatar: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	views: [
		{
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],

	category: {
		type: String,
		required: true,
	},
	tags: {
		type: String,
		required: true,
	},
	photos: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Post', postSchema);
