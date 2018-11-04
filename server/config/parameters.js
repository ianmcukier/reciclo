 
const _PARAMETERS = {
    MONGO:{
        URL:"mongodb://127.0.0.1/reciclo",
        URL2:"mongodb+srv://bacanos:1234@reciclo-nsfbd.mongodb.net/test?retryWrites=true",
        PORT : 27017,
        COLLECTIONS: {
            USER:"user",
            TRADE:"trade",
            ITEMS:"items",
            ITEM_REGISTRY:"item_registry",
            COUPON: "coupon",
            COUPON_REGISTRY: "coupon_registry",
            CATEGORIES: "coupon_category"
        },   
    }
}

module.exports = _PARAMETERS;
