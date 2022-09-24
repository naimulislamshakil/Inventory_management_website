const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const ProductSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
			unique: [true, 'Please provide a valid unique name.'],
			minLength: [5, 'Name shout be at least 5 letter.'],
			maxLength: [20, 'Name is too large.'],
			trim: true,
			lowercase: true,
		},
		description: {
			type: String,
			require: true,
		},
		unit: {
			type: String,
			require: true,
			enum: {
				values: ['kg', 'litter', 'pcs', 'bag'],
				message: "Unit value can't be {VALUE}, must be kg/litter/pcs/bag",
			},
		},
		imageUrls: [
			{
				type: String,
				require: true,
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
			require: true,
		},
		brand: {
			type: String,
			require: true,
			id: {
				type: ObjectId,
				ref: 'Brand',
				require: true,
			},
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Product = mongoose.model('Product', ProductSchema);
exports = Product;
