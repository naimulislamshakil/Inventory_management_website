const Product = require('../Model/product');

module.exports.postProductService = async (data) => {
	const result = await Product.create(data);
	return result;
};

module.exports.getProductsService = async (query) => {
	const { fields, skip, limit, sort } = query;

	const result = await Product.find({})
		.select(fields)
		.skip(skip)
		.limit(limit)
		.sort(sort);
	const count = await Product.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};

module.exports.getProductByIdService = async (id) => {
	const result = await Product.findById(id);
	return result;
};

module.exports.updateProductByIdService = async (id, data) => {
	// console.log(data);
	if (data) {
		const result = await Product.updateOne(
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
