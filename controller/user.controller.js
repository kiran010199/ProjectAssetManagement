const userDao = require('../dao/user.dao');
var userController = {
    addUser: addUser,
    findUser: findUser,
    findUserById: findUserById,
    updateUser: updateUser,
    deleteById: deleteById
}

function addUser(req, res) {
    let gig = req.body;
    userDao.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUserById(req, res) {
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
                message: "User deleted successfully",
                asset: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateUser(req, res) {
    userDao.updateUser(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User updated successfully",
                asset: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUser(req, res) {
    assetDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = userController;