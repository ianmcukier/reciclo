const User = require('../models/userModel');
const CouponRegistry = require('../models/couponRegistryModel');
const ItemRegistry = require('../models/itemRegistryModel');

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
    console.log(id)
    return new Promise((resolve, reject) => {
        CouponRegistry.findOne({ user: id }, function (err, docs) {
            console.log(err)
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

function queryItemRegistry(id) {
    console.log(id)
    return new Promise((resolve, reject) => {
        ItemRegistry.findOne({ user: id }, function (err, docs) {
            console.log(err)
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



module.exports = _USER;