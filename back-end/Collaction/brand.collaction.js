const brandService = require('../Service/brand.service');

module.exports.postBrandCollaction = async (req, res) => {
	try {
		const result = await brandService.postBrandService(req.body);
		res.status(200).json({
			status: 'Successfully',
			message: 'Data Post Successfully.',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data Post not successfully.',
			error: error.message,
		});
	}
};

module.exports.getBrandsCollaction = async (req, res) => {
	try {
		const result = await brandService.getBrandsService();
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data get not successfully.',
			error: error.message,
		});
	}
};
