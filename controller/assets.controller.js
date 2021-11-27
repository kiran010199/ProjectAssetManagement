const assetDao = require('../dao/asset.dao');
var assetController = {
    addAsset: addAsset,
    findAsset: findAsset,
    findAssetById: findAssetById,
    updateAsset: updateAsset,
    deleteById: deleteById
}

function addAsset(req, res) {
    let gig = req.body;
    assetDao.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAssetById(req, res) {
    assetDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    assetDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Asset deleted successfully",
                asset: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAsset(req, res) {
    assetDao.updateAsset(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Asset updated successfully",
                asset: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAsset(req, res) {
    assetDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = assetController;