const User = require('../models/User');
var userDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
}

function findAll() {
    return User.findAll();
}

function findById(id) {
    return User.findByPk(id);
}

function deleteById(id) {
    return User.destroy({ where: { id: id } });
}

function create(user) {
    var newGig = new User(user);
    return newGig.save();
}

function updateUser(user, id) {
    var updateUser = {
        user_name: user.user_name,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        age: user.age,
        gender: user.gender,
        address: user.address,
        am_warranty: user.am_warranty,
        phone_number: user.phone_number,
        l_id: user.l_id
    };
    return User.update(updateUser, { where: { id: id } });
}
module.exports = userDao;