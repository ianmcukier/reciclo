const Coupon = require('../models/couponModel');
const CouponRegistry = require('../models/couponRegistryModel');
const CouponCategory = require('../models/couponCategoryModel');

const _COUPON = {

    getCouponCategories: function(req,res){
        CouponCategory.find({},function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"Nenhum coupon cadastrado"
                })
            }else{
                res.send(docs);
            }
        })
    },

    getCoupons: function(req,res){
        queryCouponCategory(name)
            .then((CouponCategory) => {
                res.send(CouponCategory.coupons)
            }).catch((err) => {
                if (err.status) {
                    res.status(err.status);
                }
                res.send({
                    message: err.message
                });
            })
    },

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
