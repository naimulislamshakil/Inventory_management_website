const Store = require('../Model/Store');

module.exports.postStoreService = async (data) => {
	const result = await Store.create(data);
	return result;
};

module.exports.getStoresService = async (query) => {
	const { fields, skip, limit, sort } = query;

	const result = await Store.find({})
		.select(fields)
		.skip(skip)
		.limit(limit)
		.sort(sort);
	const count = await Store.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};

module.exports.getStoreByIdService = async (id) => {
	const result = await Store.findById(id);
	return result;
};

module.exports.updateStoreByIdService = async (id, data) => {
	// console.log(data);
	if (data) {
		const result = await Store.updateOne(
			{ _id: id },
			{ $set: data },
			{
				runValidators: true,
			}
		);
		return result;
	} else {
		const error = 'You not give me a valid data.';
	}
};
