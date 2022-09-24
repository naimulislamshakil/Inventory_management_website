const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: [true, 'Please provide a valid unique name.'],
			minLength: [5, 'Name shout be at least 5 letter.'],
			maxLength: [20, 'Name is too large.'],
			trim: true,
			lowercase: true,
		},
		description: {
			type: String,
			required: true,
		},
		unit: {
			type: String,
			required: true,
			enum: {
				values: ['kg', 'litter', 'pcs', 'bag'],
				message: "Unit value can't be {VALUE}, must be kg/litter/pcs/bag",
			},
		},
		imageUrls: [
			{
				type: String,
				required: true,
				validate: {
					validator: (value) => {
						if (Array.isArray(value)) {
							return false;
						}
						let isValid = true;
						value.forEach((url) => {
							if (validator.isURL(url)) {
								isValid = false;
							}
						});
						return isValid;
					},
					message: 'Please provide a valid url.',
				},
			},
		],
		category: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
			id: {
				type: ObjectId,
				ref: 'Brand',
				required: true,
			},
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Product = mongoose.model('Product', productSchema);
exports = Product;
