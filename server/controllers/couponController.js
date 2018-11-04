const Coupon = require('../models/couponModel');
const CouponRegistry = require('../models/couponRegistryModel');
const CouponCategory = require('../models/couponCategoryModel');
const ObjectId = require('mongoose').Types.ObjectId;

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

    getCouponsByCategory: function(req,res){
        const categoryName = req.params.name;
        CouponCategory.findOne({name:categoryName},function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"Categoria inexistente"
                })
            }else{
                Coupon.find({category: new ObjectId(docs._id)},function(err,coupon){
                    res.send(coupon)
                })
            }
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
