const router = require('express').Router();
const Post = require('../../models/Post');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');
const checkToken = require('../../middleware/checkToken');

// @posts/add/:id create a new comment
router.post(
	'/add/:post_id',
	[checkToken, checkObjectId('post_id')],
	async (req, res) => {
		const post = await Post.findById(req.params.post_id);
		const user = await User.findById(req.user.id);

		const newComment = {
			text: req.body.comment,
			user: req.user.id,
			name: user.name,
			avatar: user.avatar,
		};

		post.comments.unshift(newComment);
		await post.save();
		return res.json(post.comments);
	}
);

router.delete(
	'/delete/:post_id/:comment_id',
	[checkToken, checkObjectId('post_id'), checkObjectId('comment_id')],
	async (req, res) => {
		const post = await Post.findById(req.params.post_id);

		// pull out comment
		const comment = await post.comments.find(
			(comment) => comment.id === req.params.comment_id
		);
		// Make sure comment exists
		if (!comment)
			return res.status(400).json({ msg: 'comment does not exists' });

		//check if user exist
		if (comment.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'User not authorized' });

		post.comments = post.comments.filter(
			({ id }) => id !== req.params.comment_id
		);
		await post.save();
		return res.json(post.comments);
	}
);

module.exports = router;
