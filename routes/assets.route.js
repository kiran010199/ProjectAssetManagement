const express = require('express');
const router = express.Router();
const assetController = require('../controller/assets.controller');

router.post('/', assetController.addAsset);
router.get('/', assetController.findAsset);
router.get('/:id', assetController.findAssetById);
router.put('/:id', assetController.updateAsset);
router.delete('/:id', assetController.deleteById);

module.exports = router;
