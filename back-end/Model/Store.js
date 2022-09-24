const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
	{
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
		description: String,
		status: {
			type: String,
			enum: ['active', 'inActive'],
			default: 'active',
		},
		manager: {
			name: String,
			phoneNumber: String,
			id: {
				type: ObjectId,
				ref: 'User',
			},
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Store = mongoose.model('Store', storeSchema);
module.children = Store;
