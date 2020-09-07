const router = require('express').Router();
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const checkToken = require('../../middleware/checkToken');
const transporter = require('../../middleware/transporter');

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
			if (user)
				return res
					.status(400)
					.json({ errors: [{ msg: 'User with this email already exists' }] });

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
		// const { email, password } = req.body;
		// res.send({ email, password });
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
	} catch (err) {
		console.log(err);
	}
});

// forgot password
router.put('/forgot-password', async (req, res) => {
	const email = req.body.email;
	await User.findOne({ email }, async (err, user) => {
		if (err || !user)
			return res.status(400).json({
				errors: [{ msg: 'User with this email does not exist  exists' }],
			});
		const token = jwt.sign(
			{ _id: user._id },
			process.env.FORGOT_PASSWORD_SECRET,
			{ expiresIn: '20m' }
		);

		
		const mailContent = {
			from: 'noreply@dicedtrend.com',
			to: `${req.body.email}`,
			subject: 'Password reset link',
			html: `
				<h1 style="color:red">Welcome</h1>
				<p>${process.env.CLIENT_URL}/resetpassword/${token}</p>
				<p>That was easy!</p>
				`,
		};


		await user.updateOne({ resetLink: token }, (err, success) => {
			if (err) {
				return res.status(400).json({
					errors: [{ msg: 'Reset password error, Please try again later' }],
				});
			} else {
				transporter.sendMail(mailContent, (err, data) => {
					if (err)
						return res.status(400).json({
							errors: [{ msg: 'Reset password error, Please try again later' }],
						});

					return res.json({
						msg: 'Password reset email sent, kindly follow instruction',
					});
				});
			}
		});

		
	});
});

//reset password
router.put('/reset-password', async (req, res) => {
	const { resetLink, newPassword } = req.body;
	if (resetLink) {
		jwt.verify(
			resetLink,
			process.env.FORGOT_PASSWORD_SECRET,
			(err, decoded) => {
				if (err)
					return res.status(400).json({
						errors: [{ msg: 'Reset link does not exist or has expire' }],
					});
			}
		);
	} else {
		return res.status(400).json({
			errors: [{ msg: 'Reset password error, Please try again later' }],
		});
	}
});
module.exports = router;
