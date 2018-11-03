const Coupon = require('../models/couponModel');

const _TRADE = {

    getCoupon: function(req,res){
        const name = req.params.name;
        Coupon.find({},function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"Nenhum coupon cadastrado"
                })
            }else{
                res.send(docs);
            }
        })
    } 
}



module.exports = _TRADE;