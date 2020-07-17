const router = require('express').Router();
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const checkToken = require('../../middleware/checkToken');

// @desc     load user on token verification
router.get('/user', checkToken, async (req, res) => {
	try {
		let user = await User.findById(req.user.id).select('-password -__v -date');
		res.json(user);
	} catch (err) {
		res.status(500).send('Server Error');
	}
});

// @route    POST /users/register
router.post(
	'/register',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists(),
	],
	async (req, res) => {
		//validation
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });

		try {
			// check if user exist
			const { name, email, password } = req.body;
			let user = await User.findOne({ email });
			if (user) return res.status(400).json('User already exists');

			//has password
			user = new User({ name, email, password });
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			const avatar = 'default.svg';
			user.avatar = avatar;
			await user.save();
			const payload = {
				user: {
					id: user.id,
				},
			};

			// JWT
			jwt.sign(
				payload,
				process.env.JWT_SECRET_TOKEN,
				{
					expiresIn: 36000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err);
		}
	}
);

// @route    POST auth/login
router.post(
	'/login',
	[check('email').isEmail(), check('password').isLength({ min: 5 })],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user)
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid Credentials' }] });
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch)
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid Credentials' }] });

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				process.env.JWT_SECRET_TOKEN,
				{
					expiresIn: 36000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err);
		}
	}
);

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
module.exports = router;
