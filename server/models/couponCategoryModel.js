var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Coupon Type', new Schema({
    coupons: [{ type: Schema.Types.ObjectId, ref: 'Coupon' }],
    name: { type: String, dropDups: true, index: { unique: true }, required: true },
    img: { type:String, required: true },
}, { collection: PARAMETER.MONGO.COLLECTIONS.CATEGORIES}
));
