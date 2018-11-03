const ItemRegistry = require('../models/itemRegistryModel');


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
    }
}



module.exports = _ITEMREG;