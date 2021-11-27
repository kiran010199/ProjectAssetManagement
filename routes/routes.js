const express = require('express');
const router = express.Router();
const assetRoutes = require('./assets.route');
const userRoutes = require('./users.route');

router.use('/asset', assetRoutes);
module.exports = router;

router.use('/user', userRoutes);
module.exports = router;