const express = require('express');
const router = express.Router();
const brandCollaction = require('../../Collaction/brand.collaction');

router
	.route('/')
	.post(brandCollaction.postBrandCollaction)
	.get(brandCollaction.getBrandsCollaction);

router
	.route('/:id')
	.get(brandCollaction.getBrandByIdCollaction)
	.patch(brandCollaction.updateBrandByIdCollaction);

module.exports = router;
