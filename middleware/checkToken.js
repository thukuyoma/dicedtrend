const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports = function (req, res, next) {
	const token = req.header('authorization').split(' ')[1];
	if (!token) return res.status(401).send('No token, authorization denied');
	try {
		jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
			if (err)
				return res
					.status(401)
					.JWT_SECRET_TOKEN({ msg: 'Authorization denied, token invalid' });
			req.user = decoded.user;
			next();
		});
	} catch (err) {
		res.status(500).send({ msg: 'Server Error' });
	}
};
