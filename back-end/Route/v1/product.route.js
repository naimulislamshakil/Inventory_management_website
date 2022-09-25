const router = require('express').Router();
const productCollaction = require('../../Collaction/product.collaction');

router
	.route('/')
	.post(productCollaction.postProductCollaction)
	.get(productCollaction.getProductsCollaction);

module.exports = router;
