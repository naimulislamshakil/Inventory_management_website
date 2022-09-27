const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please Provide a valid store name.'],
			unique: true,
			trim: true,
		},
		location: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
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
module.exports = Store;
