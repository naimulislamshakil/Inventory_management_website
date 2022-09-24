const brandService = require('../Service/brand.service');

module.exports.postBrandCollaction = async (req, res) => {
	const result = brandService.postBrandService();

	res.status(200).send('hi');
};
