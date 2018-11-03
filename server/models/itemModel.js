var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Item', new Schema({
    type: { type: String, dropDups: true, index: { unique: true }, required: true },
    value: { type: Number, required: true },
    exchange: {
        metric: { type: String, required: true },
        quantity: { type: Number, default: 1 }
    }
}, { collection: PARAMETER.MONGO.COLLECTIONS.ITEMS }
));