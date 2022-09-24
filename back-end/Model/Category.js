const mongoose = require('mongoose');
const validator = require('validator');

const categorySchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please Provide a valid category name.'],
			unique: true,
			minLength: [5, 'Name shout be at least 5 letter.'],
			maxLength: [20, 'Name is too large.'],
			trim: true,
			lowercase: true,
		},
		description: String,
		imageUrl: {
			type: String,
			validate: [validator.isEmail, 'Please provide a valid email.'],
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Category = mongoose.model('Category', categorySchema);
module.children = Category;
