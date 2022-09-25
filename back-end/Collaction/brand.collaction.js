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
		const { fields, limit = 5, page = 1, sort } = req.query;
		const query = {};

		if (fields) {
			const split = fields.split(',').join(' ');
			query.fields = split;
		}

		if (page) {
			const skip = (page - 1) * parseInt(limit);
			query.skip = skip;
			query.limit = parseInt(limit);
		}

		const result = await brandService.getBrandsService(query);
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

module.exports.getBrandByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await brandService.getBrandByIdService(id);
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

module.exports.updateBrandByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await brandService.updateBrandByIdService(id, req.body);
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
