const productService = require('../Service/product.service');

module.exports.postProductCollaction = async (req, res) => {
	try {
		const result = await productService.postProductService(req.body);
		res.status(200).json({
			status: 'Successfully',
			message: 'Product Post Successfully.',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Product Post not successfully.',
			error: error.message,
		});
	}
};

module.exports.getProductsCollaction = async (req, res) => {
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

		if (sort) {
			const split = fields.split(',').join(' ');
			query.sort = split;
		}

		const result = await productService.getProductsService(query);
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Product get not successfully.',
			error: error.message,
		});
	}
};

module.exports.getProductByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await productService.getProductByIdService(id);
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
