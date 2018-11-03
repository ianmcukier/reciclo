const ItemRegistry = require('../models/itemRegistryModel');
const Item = require('../models/itemModel');


const _ITEMREG = {

    getItemRegistry: function (req, res) {
        ItemRegistry.find({})
            .populate({
                path: 'exchange.item',
                populate: 'item'
            })
            .populate('trade')
            .exec(function (err, docs) {
                if (!docs) {
                    res.status(404).send({
                        message: "Nenhum coupon cadastrado"
                    })
                } else {
                    res.send(docs);
                }
            });
    },

    getItems: function(req,res){
        Item.find({},function(err,docs){
            if(docs.length<1){
                res.status(404).send({
                    message: "Nenhum item cadastrado"
                })
            }else{
                res.send(docs);
            }
        })
    }
}



module.exports = _ITEMREG;