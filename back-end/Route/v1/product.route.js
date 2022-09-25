const router = require('express').Router();
const productCollaction = require('../../Collaction/product.collaction');

router
	.route('/')
	.post(productCollaction.postProductCollaction)
	.get(productCollaction.getProductsCollaction);

router.route('/:id').get(productCollaction.getProductByIdCollaction);

module.exports = router;
