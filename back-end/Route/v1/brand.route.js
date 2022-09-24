const router = require('express').Router();
const brandCollaction = require('../../Collaction/brand.collaction');

// Create method
router.route('/').post(brandCollaction.postBrandCollaction);

module.exports = router;
