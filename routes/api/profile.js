const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Post = require('../../models/Post');
const checkToken = require('../../middleware/checkToken');

// @  update user profile avatar
router.post('/update-avatar', [checkToken], async (req, res) => {
	if (req.files.avatar == null) {
		return res.status(500).json({ msg: 'Please choose an image to upload ' });
	}
	try {
		const avatar = req.files.avatar;
		await avatar.mv(`../client/public/images/profile/${avatar.name}`, (err) => {
			if (err) return res.status(500).send(err);
		});
		const user = await User.findById(req.user.id);
		user.avatar = avatar.name;
		await user.save();
		return res.json(avatar.name);
		// res.send(user);
	} catch (err) {
		console.log(err);
	}
	// res.send('Avatar update');
});

// try to resolve the post s issues
// router.get('/search', async (req, res) => {
// 	const query = req.body.query;

// 	await Post.find({ article: query }, (err, searchedPost) => {
// 		if (err) {
// 			res.send(err);
// 		} else {
// 			res.send(searchedPost);
// 		}
// 	});
// });

router.get('/search/:query', async (req, res) => {
	try {
		const query = req.params.query;
		// res.json(query);
		function escapeRegex(text) {
			return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
		}
		const regex = new RegExp(escapeRegex(query), 'gi');
		await Post.find({ title: regex }, (err, posts) => {
			if (err) {
				console.log(err);
			} else {
				res.json(posts);
			}
		});
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
