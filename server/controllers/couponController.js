const Coupon = require('../models/couponModel');
const CouponRegistry = require('../models/couponRegistryModel');


const _COUPON = {

    getCoupon: function(req,res){
        Coupon.find({},function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"Nenhum coupon cadastrado"
                })
            }else{
                res.send(docs);
            }
        })
    },

    getCouponRegistry:function(req,res){
        CouponRegistry.find({})
        .populate('coupon')
        .exec(function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"Nenhum coupon cadastrado"
                })
            }else{
                res.send(docs);
            }
        });
    }
}



module.exports = _COUPON;