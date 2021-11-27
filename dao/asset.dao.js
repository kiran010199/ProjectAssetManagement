const Asset = require('../models/Asset');
var assetDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAsset: updateAsset
}

function findAll() {
    return Asset.findAll();
}

function findById(id) {
    return Asset.findByPk(id);
}

function deleteById(id) {
    return Asset.destroy({ where: { id: id } });
}

function create(asset) {
    var newGig = new Asset(asset);
    return newGig.save();
}

function updateAsset(asset, id) {
    var updateAsset = {
        am_id: asset.am_id,
        am_atype_id: asset.am_atype_id,
        am_make_id: asset.am_make_id,
        am_ad_id: asset.am_ad_id,
        am_model: asset.am_model,
        am_snumber: asset.am_snumber,
        am_pdate: asset.am_pdate,
        am_warranty: asset.am_warranty,
        am_from: asset.am_from,
        am_to: asset.am_to,
        am_myyear: asset.am_myyear
    };
    return Asset.update(updateAsset, { where: { id: id } });
}
module.exports = assetDao;