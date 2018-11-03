var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Trade', new Schema({
    name: { type: String, dropDups: true, index: { unique: true }, required: true},
    email: { type: String, dropDups: true, index: { unique: true }, required: true },
    phone: { type: Number, dropDups: true, required: true },
    address: {
        street: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        cep: { type: Number, required: true }
    },
}, { collection: PARAMETER.MONGO.COLLECTIONS.TRADE }
));