const storeService = require('../Service/store.service');

module.exports.postStoreCollaction = async (req, res) => {
	try {
		const result = await storeService.postStoreService(req.body);
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

module.exports.getStoresCollaction = async (req, res) => {
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

		const result = await storeService.getStoresService(query);
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

module.exports.getStoreByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await storeService.getStoreByIdService(id);
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

module.exports.updateStoreByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await storeService.updateStoreByIdService(id, req.body);
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
