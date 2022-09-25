const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please Provide a valid brand name.'],
			unique: true,
			minLength: [5, 'Name shout be at least 5 letter.'],
			maxLength: [20, 'Name is too large.'],
			trim: true,
			lowercase: true,
		},
		description: String,
		email: {
			type: String,
			lowercase: true,
			validate: [validator.isEmail, 'Please provide a valid email.'],
		},
		website: {
			type: String,
			validate: [validator.isURL, 'Please provide a valid url.'],
		},
		location: {
			type: String,
			required: [true, 'Please Provide a valid location name.'],
		},
		products: [
			{
				type: ObjectId,
				ref: 'Product',
			},
		],
		suppliers: [
			{
				type: String,
				phoneNumber: String,
				id: {
					type: ObjectId,
					ref: 'Supplier',
				},
			},
		],
		status: {
			type: String,
			enum: ['active', 'inActive'],
			default: 'active',
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
