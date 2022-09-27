const router = require('express').Router();
const storeCollaction = require('../../Collaction/product.collaction');

router
	.route('/')
	.post(storeCollaction.postProductCollaction)
	.get(storeCollaction.getProductsCollaction);

router
	.route('/:id')
	.get(storeCollaction.getProductByIdCollaction)
	.patch(storeCollaction.updateProductByIdCollaction);

module.exports = router;
