const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const path = require('path');

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

//connect to DB

mongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connected to db')
);
//Middleware
app.use(express.json());
app.use(fileUpload());
const port = 5000;

app.use('/auth/', require('./routes/api/auth'));
app.use('/posts/', require('./routes/api/post'));
app.use('/comment/', require('./routes/api/comment'));
app.use('/profile/', require('./routes/api/profile'));
app.use('/mailer/', require('./routes/api/mailer'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
