const Brand = require('../Model/Brand');

module.exports.postBrandService = async (data) => {
	const result = await Brand.create(data);
	return result;
};

module.exports.getBrandsService = async (query) => {
	const { fields, skip, limit } = query;

	const result = await Brand.find({}).select(fields).skip(skip).limit(limit);
	const count = await Brand.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};
module.exports.getBrandByIdService = async (id) => {
	const result = await Brand.findById(id);
	return result;
};
module.exports.updateBrandByIdService = async (id, data) => {
	if (data) {
		const result = await Brand.updateOne(
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
