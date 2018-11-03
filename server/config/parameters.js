 
const _PARAMETERS = {
    MONGO:{
        URL:"mongodb://127.0.0.1/reciclo",
        PORT : 27017,
        COLLECTIONS: {
            USER:"user",
            TRADE:"trade",
            ITEMS:"items",
            ITEM_REGISTRY:"item_registry",
            COUPON: "coupon",
            COUPON_REGISTRY: "coupon_registry"
        },   
    }
}

module.exports = _PARAMETERS;
