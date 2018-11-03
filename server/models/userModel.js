var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    name: { type: String, required: true },
    email: { type: String, dropDups: true, index: { unique: true }, required: true },
    cpf: { type: Number, dropDups: true, index: { unique: true }, required: true },
    points: { type: Number, default: 0 },
}, { collection: PARAMETER.MONGO.COLLECTIONS.USER }
));