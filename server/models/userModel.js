var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
        days: { type: Number },
        client_id : {type: Number },
        state: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        carrier: { type: String, lowercase: true },
        issuer: { type: String, lowercase: true },
        tags: [{type: String, lowercase: true}]  
    }, { collection: PARAMETERS.MONGO.COLLECTIONS.CALCULATIONS }
));