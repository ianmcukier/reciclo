var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Coupon Registry', new Schema({
    coupon: { type: Schema.Types.ObjectId, ref: 'Coupon', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    creationDate: { type: Date, default: Date.now },
    usedDate: {type:Date},
    status : {type:String, enum : ["NEW","USED"], default: "NEW"}
}, { collection: PARAMETER.MONGO.COLLECTIONS.COUPON_REGISTRY }
));