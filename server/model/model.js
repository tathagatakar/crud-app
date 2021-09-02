const mongoose=require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    courses: String,
    payment: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;