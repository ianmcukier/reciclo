const Coupon = require('../models/couponRegistryModel');

const _USER = {

    loadMongoTest: function(req, res) {

        var testUser = new Coupon({
            status:"Teste2",
        });

        
        testUser.save(function (err) {
            if (err) return res.send(err);
            res.send('saved!');
            // saved!
          });

    }
}



module.exports = _USER;