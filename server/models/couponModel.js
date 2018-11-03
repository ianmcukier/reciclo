var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Coupon', new Schema({
    nome: { type: String, required: true },
    codigo: { type: String, dropDups: true, index: { unique: true }, required: true },
    points: { type: Number, required: true },
    exchange:{
        value: { type: Number, required: true },
        type: { type: String, requires: true, enum:["percentage","quantity"], default:"percentage" },
    },
    description: { type: String },
    img: { type:String }
    }, { collection: PARAMETER.MONGO.COLLECTIONS.COUPON }
));