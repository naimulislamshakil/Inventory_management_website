const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
const Port = process.env.PORT || 5000;
require('dotenv').config();

// mongoose connect with mongodb atlas
mongoose
	.connect(process.env.MONGOOSE)
	.then(() => {
		console.log('Mongoose Succesfully Connected.'.yellow.bold);
	})
	.catch((err) => {
		console.log(err);
	});

// Show "/" route
app.get('/', (req, res) => {
	res.send(`<h1>How are you?</h1>`);
});

// Any Route Not Found
app.use('*', (req, res) => {
	const { baseUrl } = req;
	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(Port, () => {
	console.log(`Inventory Management System Is Running: ${Port}`.red.bold);
});
