const Product = require('../Model/product');

exports.getTrandingService = async () => {
	const result = await Product.find({}).sort('-viewCount').limit(3);
	return result;
};
