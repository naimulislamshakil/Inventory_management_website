const router = require('express').Router();
const storeCollaction = require('../../Collaction/store.collaction');

router
	.route('/')
	.post(storeCollaction.postStoreCollaction)
	.get(storeCollaction.getStoresCollaction);

router
	.route('/:id')
	.get(storeCollaction.getStoreByIdCollaction)
	.patch(storeCollaction.updateStoreByIdCollaction);

module.exports = router;
