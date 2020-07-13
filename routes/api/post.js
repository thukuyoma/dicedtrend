const router = require('express').Router();
const Post = require('../../models/Post');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const checkToken = require('../../middleware/checkToken');
const checkObjectId = require('../../middleware/checkObjectId');

// create post
router.post('/create', checkToken, async (req, res) => {
	if (req.files.postImage == null) {
		res.status(500).json({ msg: 'Please choose an image to upload' });
	}
	const postImage = req.files.postImage;
	await postImage.mv(
		`./client/public/images/posts/${postImage.name}`,
		(err) => {
			if (err) {
				return res.status(500).send(err);
			}
		}
	);

	const { title, article, summary, category, tags } = req.body;
	const user = await User.findById(req.user.id);
	const newPost = {
		title,
		article,
		summary,
		category,
		tags,
		photos: postImage.name,
		author: user.name,
		user: req.user.id,
		avatar: user.avatar,
	};
	const post = new Post(newPost);
	await post.save();
	res.json(post);
});

//get all post
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 });
		res.send(posts);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

//get all user(author) post
router.get('/user-posts', checkToken, async (req, res) => {
	try {
		const posts = await Post.find({ user: req.user.id });
		res.json(posts);
	} catch (err) {
		console.log(err);
	}
});
//get a single post with id
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (err) {
		throw err;
	}
});

// delete user post
router.delete(
	'/user-posts/:post_id',
	[checkToken, checkObjectId('post_id')],
	async (req, res) => {
		try {
			const post = await Post.findById(req.params.post_id);
			if (post.user.toString() !== req.user.id) {
				return res.status(401).json({ msg: 'User not authorized' });
			}
			await post.remove();
			res.json({ msg: 'Post removed' });
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

router.put(
	'/edit-post/:user_post_id',
	[checkToken, checkObjectId('user_post_id')],
	async (req, res) => {
		try {
			// const id = req.params.user_post_id;
			const postImage = req.files.postImage;
			if (req.files.postImage) {
				await postImage.mv(
					`../client/public/images/posts/${postImage.name}`,
					(err) => {
						if (err) {
							return res.status(500).send(err);
						}
					}
				);
			}
			const { title, article, summary, category, tags } = req.body;
			const updatePost = {
				title,
				article,
				summary,
				category,
				tags,
				photos: postImage.name,
				user: req.user.id,
			};
			await Post.findOneAndUpdate(
				{ id: req.params.req.params.user_post_id },
				updatePost,
				{ upsert: true },
				async (err, updatedPost) => {
					if (err) return res.send(500, { error: err });
					await updatedPost.save();
					// return res.send(updatedPost);
					return res.json({ message: 'Post successfully updated!' });
				}
			);
		} catch (err) {
			console.log(err);
		}
	}
);

//search post
router.get('/hero-post', async (req, res) => {
	res.send('Hello');
});

module.exports = router;
