const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
	{
		productId: {
			type: ObjectId,
			required: true,
			ref: 'Product',
		},
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
		price: {
			type: Number,
			required: true,
			min: [0, "Product price can't be negative."],
		},
		quantity: {
			type: Number,
			required: true,
			min: [0, "Product quantity can't be negative."],
		},
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
		status: {
			type: String,
			required: true,
			enum: {
				values: ['active', 'inActive', 'discontinue'],
				message: "Status can't be {VALUE}.",
			},
		},
		store: {
			name: {
				type: String,
				required: [true, 'Please Provide a valid store name.'],
				unique: true,
				enum: {
					values: [
						'dhaka',
						'chattogram',
						'rajshahi',

						'khulna',
						'sylhet',
						'barisal',
						'rangpur',
						'mymensing',
					],
					message: '{VALUE} is not a valid name.',
				},
				trim: true,
				lowercase: true,
			},
			id: {
				type: ObjectId,
				ref: 'Store',
				required: true,
			},
		},
		supplieBy: {
			name: {
				type: String,
				required: [true, 'Please Provide a valid supplier name.'],
				trim: true,
			},
			id: {
				type: ObjectId,
				ref: 'Supplier',
			},
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Stock = mongoose.model('Stock', stockSchema);
exports = Stock;
