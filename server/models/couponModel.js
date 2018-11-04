var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Coupon', new Schema({
    name: { type: String, required: true },
    code: { type: String, dropDups: true, index: { unique: true }, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Coupon Type', required: true },
    points: { type: Number, required: true },
    exchange:{
        quantity: { type: Number, required: true },
        type: { type: String, requires: true, enum:["percentage","currency"], default:"percentage" },
    },
    description: { type: String },
    img: { type:String }
    }, { collection: PARAMETER.MONGO.COLLECTIONS.COUPON }
));
