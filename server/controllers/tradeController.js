const Trade = require('../models/tradeModel');
const Coupon = require('../models/couponModel');
const ItemRegistry = require('../models/itemRegistryModel');
const Item = require('../models/itemModel');


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
                queryItemRegistry(new ObjectId(trade._id)).then(coupReg => {
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
}



module.exports = _TRADE;
