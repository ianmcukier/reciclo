var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Item Registry', new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    trade: { type: Schema.Types.ObjectId, ref: 'Trade', required: true },
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    totalPoints: { type: Number, required: true },
    exchange: [{
        item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true }
    }]
}, { collection: PARAMETER.MONGO.COLLECTIONS.ITEM_REGISTRY }
));