var mongoose = require('mongoose');
var PARAMETER = require('../config/parameters');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Coupon Type', new Schema({
    coupons: [{ type: Schema.Types.ObjectId, ref: 'Coupon' }],
    name: { type: String, dropDups: true, index: { unique: true }, required: true },
    img: { type:String, required: true },
<<<<<<< HEAD
}, { collection: PARAMETER.MONGO.COUPON }
=======
}, { collection: PARAMETER.MONGO.COLLECTIONS.CATEGORIES}
>>>>>>> 24a5ba191aa881bd1b31d3fc5481e1fda445d1ab
));
