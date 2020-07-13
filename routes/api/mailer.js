const express = require('express');
const router = express.Router();
const transporter = require('../../middleware/transporter');
const { v4: uuidv4 } = require('uuid');
const Newsletter = require('../../models/Newsletter');

router.post('/newsletter/', async (req, res) => {
	try {
		await Newsletter.find({ email: req.body.email }, async (err, email) => {
			if (err) {
				return res.send(err);
			} else {
				if (email.length > 1) {
					// return res.json('Email already subscribed to our list');
					return res.status(401).json({ msg: 'User not authorized' });
					// return res
					// 	.status(400)
					// 	.json({ msg: 'Email already subscribed to our list' });
				}
			}
		});
		const activationToken = uuidv4();
		const newSubscriber = {
			email: req.body.email,
			activationToken,
		};
		const newsletter = new Newsletter(newSubscriber);
		await newsletter.save();
		await transporter.sendMail(
			{
				from: 'theo4biz2012@gmail.com',
				to: `${req.body.email}`,
				subject: 'Thank you for subscribing to our newsletter ✔',
				// html: '<h1 style="color:red">Welcome</h1><p>That was easy!</p>',
				html: '<h1 style="color:red">Welcome</h1><p>That was easy!</p>',
			},
			async (error, info) => {
				if (error) {
					res.json(error);
				} else {
				}
			}
		);
		res.json(`check ${newsletter.email} to verify your email`);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
