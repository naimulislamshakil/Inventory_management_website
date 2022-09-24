const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
		unique: [true, 'Please provide a valid unique name.'],
		minLength: [5, 'Name shout be at least 5 letter.'],
		maxLength: [20, 'Name is too large.'],
		trim: true,
	},
});
