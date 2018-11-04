const Trade = require('../models/tradeModel');
const Coupon = require('../models/couponModel');
const ItemRegistry = require('../models/itemRegistryModel');
const Item = require('../models/itemModel');
const ObjectId = require('mongoose').Types.ObjectId;


const _TRADE = {

    getAllTrades: function(req, res) {
        let query = null
        if(req.query.city!=null){
            query = {
                "address.city":req.query.city.toUpperCase()
            };
        }

        console.log(query)
        Trade.find(query,function(err,docs){
            if(docs.length<1){
                res.status(404).send({
                    message:"Nenhum ponto de troca encontrado"
                })
            }else{
                res.send(docs)
            }
        }).catch((err)=>{
            console.log(err);
        })
    },

    getTrade: function(req,res){
        const name = req.params.name;
        Trade.findOne({name:name},function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"Loja não encontrada"
                })
            }else{
                res.send(docs);
            }
        })
    },

    getItemHistory: function (req, res) {
        const name = req.params.name;

        queryTrade(name)
            .then((trade) => {
                queryItemRegistry(new ObjectId(trade._id))
                .then(coupReg => {
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
};

function queryTrade(name) {
    return new Promise((resolve, reject) => {
        Trade.findOne({ name: name }, function (err, docs) {
            if (!docs) {
                reject({
                    message: "Ponto de troca não encontrado",
                    status: 404
                })
            } else {
                resolve(docs)
            }
        })
    })
}

function queryItemRegistry(id) {
    return new Promise((resolve, reject) => {
        ItemRegistry.find({ trade: id })
            .populate({
                path: 'exchange.item',
                populate: 'item'
            })
            .populate('user')
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



module.exports = _TRADE;
