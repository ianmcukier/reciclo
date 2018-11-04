const User = require('../models/userModel');
const CouponRegistry = require('../models/couponRegistryModel');
const Coupon = require('../models/couponModel');
const ItemRegistry = require('../models/itemRegistryModel');
const Item = require('../models/itemModel');


var ObjectId = require('mongoose').Types.ObjectId;



const _USER = {

    getUser: function (req, res) {
        const cpf = req.params.cpf;
        queryUser(cpf)
            .then((user) => {
                res.send(user)
            }).catch((err) => {
                if (err.status)
                    res.status(err.status);

                res.send({
                    message: err.message
                });
            })
    },

    getCouponHistory: function (req, res) {
        const cpf = req.params.cpf;

        queryUser(cpf)
            .then((user) => {
                queryCouponRegistry(new ObjectId(user._id)).then(coupReg => {
                    res.send(coupReg)
                }).catch(err => {
                    if (err.status)
                        res.status(err.status);
                    res.send({
                        message: err.message
                    });
                })
            }).catch((err) => {
                if (err.status)
                    res.status(err.status);
                res.send({
                    message: err.message
                });
            })



    },

    getItemHistory: function (req, res) {
        const cpf = req.params.cpf;

        queryUser(cpf)
            .then((user) => {
                queryItemRegistry(new ObjectId(user._id)).then(coupReg => {
                    res.send(coupReg)
                }).catch(err => {
                    if (err.status)
                        res.status(err.status);
                    res.send({
                        message: err.message
                    });
                })
            }).catch((err) => {
                if (err.status)
                    res.status(err.status);
                res.send({
                    message: err.message
                });
            })



    },

    putPoints: function (req, res) {
        const cpf = req.params.cpf;

        const points = req.body.value;
        queryUser(cpf)
            .then((user) => {
                console.log(user.points + points)
                user.points = user.points + points;
                user.save((err) => {
                    if (err) {
                        res.status(500);
                        res.send(err);
                    } else {
                        res.send({
                            message: "Pontos atualizados"
                        })
                    }
                })
            }).catch((err) => {
                if (err.status)
                    res.status(err.status);
                res.send({
                    message: err.message
                });
            })
    },

    purchaseCoupon: function (req, res) {
        const idCoupon = req.body.coupon;
        const cpf = req.params.cpf;

        console.log(idCoupon);
        Coupon.findById(ObjectId(idCoupon), function (err, coupon) {
            if (err) {
                res.status(500);
                res.send(err);
            } else {
                queryUser(cpf)
                    .then(user => {
                        if (user.points > coupon.points) {
                            user.points = user.points - coupon.points;
                            user.save(err => {
                                if (err) {
                                    res.status(404);
                                    res.send(err);
                                } else {
                                    let couponReg = new CouponRegistry({
                                        coupon: coupon,
                                        user: user,
                                    })
                                    couponReg.save(err => {
                                        if (err) {
                                            res.status(404);
                                            res.send(err);
                                        } else {
                                            res.send('Coupon comprado com sucesso')
                                        }
                                    })
                                }
                            })
                        } else {
                            res.status(404);
                            res.send({
                                message: "Pontos insuficientes"
                            })
                        }
                    }).catch(err => {
                        res.send(err);
                    })
            }
        })
    },

    pointsStatement: function (req, res) {
        const cpf = req.params.cpf;

        queryUser(cpf)
            .then(user => {
                let promiseItems = queryItemRegistry(new ObjectId(user._id));
                let promiseCoupon = queryCouponRegistry(new ObjectId(user._id));
                Promise.all([promiseItems,promiseCoupon])
                .then((values)=>{
                    res.send(buildResponseStatemente(values));
                }).catch(err=>{
                    res.send(err);
                })
            }).catch(err => {
                erroHandling(res,err);
            })
    }


};

function queryUser(cpf) {
    return new Promise((resolve, reject) => {
        User.findOne({ cpf: cpf }, function (err, docs) {
            if (!docs) {
                reject({
                    message: "CPF não cadastrado",
                    status: 404
                })
            } else {
                resolve(docs)

            }
        })
    })
}


function queryCouponRegistry(id) {
    return new Promise((resolve, reject) => {
        CouponRegistry.find({ user: id })
            .populate('coupon')
            .exec(function (err, docs) {
                if (!docs) {
                    reject({
                        message: "Não coupons registrados",
                        status: 404
                    })
                } else {
                    resolve(docs)
                }
            });
    })
}


function queryItemRegistry(id) {
    return new Promise((resolve, reject) => {
        ItemRegistry.find({ user: id })
            .populate({
                path: 'exchange.item',
                populate: 'item'
            })
            .populate('trade')
            .exec(function (err, docs) {
                if (!docs) {
                    reject({
                        message: "Não coupons registrados",
                        status: 404
                    })
                } else {
                    resolve(docs)

                }
            })
    })
}

function erroHandling(res, err) {
    if (err.status)
        res.status(err.status);
    res.send({
        message: err.message
    });
}

function buildResponseStatemente(values){
    let itemValues = values[0];
    let couponValues = values[1];
    let statement = filterItemData(itemValues,'item').concat(filterCouponData(couponValues,'coupon'))
    return statement.sort(custom_sort)
}


function filterItemData(elemArray,type){
    var data= [];
    for(i=0;i<elemArray.length;i++){
        var statementEvent = {
            type:type,
            name:elemArray[i].trade.name,
            points:elemArray[i].totalPoints
        };
        statementEvent.date = elemArray[i].date;

        data.push(statementEvent)
    }
    return data;

}

function filterCouponData(elemArray,type){
    var data= [];
    for(i=0;i<elemArray.length;i++){
        var statementEvent = {
            type:type,
            name:elemArray[i].coupon.name,
            points:elemArray[i].coupon.points
        };

        statementEvent.date = elemArray[i].creationDate;

        data.push(statementEvent)
    }
    return data;

}

function custom_sort(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
}





module.exports = _USER;