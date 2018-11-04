const Coupon = require('../models/couponModel');
const CouponReg = require('../models/couponRegistryModel');
const User = require('../models/userModel');
const Trade = require('../models/tradeModel');
const Item = require('../models/itemModel');
const ItemReg = require('../models/itemRegistryModel');
const CouponType = require('../models/couponCategoryModel');


const database = require('../config/database')

database.startupScript();

var couponType1 = new CouponType({
    name: 'Restaurantes',
    img: 'https://i.pinimg.com/originals/6d/e1/70/6de17008b1a3a2ba566c0e90fa5b3cec.jpg'
});

saveMongo(couponType1, "CouponType1");

var couponType2 = new CouponType({
    name: 'Contas',
    img: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
});

saveMongo(couponType2, "CouponType2");


var couponType3 = new CouponType({
    name: 'Eventos Culturais',
    img: 'https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

saveMongo(couponType3, "CouponType3");


var couponType4 = new CouponType({
    name: 'Cafeterias',
    img: 'http://revistaespresso.com.br/wordpress/wp-content/uploads/2017/12/E55_DSC04037.jpg'
});

saveMongo(couponType4, "CouponType4");


// Definindo usuario
var user1 = new User({
    name: "Rodrigo",
    email: "rodrigo@email.com.br",
    cpf: 111111111,
})

saveMongo(user1, "User1")

// Definindo items

var item1 = new Item({
    type: "organico",
    value: 10,
    exchange: {
        metric: "gramas",
    }
});

var item2 = new Item({
    type: " inorganico",
    value: 20,
    exchange: {
        metric: "quantidade",
        quantity: 5
    }
});

saveMongo(item1, "item1");
saveMongo(item2, "item2");

// Definindo Ponto de troca

var trade1 = new Trade({
    name: "Botafogo I",
    email: "reciclo.botafogo@reciclo.com.br",
    phone: 123456777,
    address: {
        street: "Rua da Reciclagem",
        state: "Rio de Janeiro",
        city: "RJ",
        cep: 22222222
    }
});

saveMongo(trade1, "trade1");

// Definindo Coupons

var coupon1 = new Coupon({
    name: "Comuna",
    code: "23eef5",
    points: 100,
    exchange: {
        quantity: 10,
    },
    description: "Desconto em qualquer sanduiche",
})

couponType1.coupons.push(coupon1);
saveMongo(couponType1, 'CouponType1');

saveMongo(coupon1, "coupon1");


// Criando registro dos items

var itemReg = new ItemReg({
    user: user1,
    trade: trade1,
    totalPoints: 50,
    exchange: [{
        item: item1,
        quantity: 3
    },
    {
        item:item2,
        quantity:1
    }]
})

saveMongo(itemReg,"itemReg")

// Definindo registros de coupons

var couponReg = new CouponReg({
    coupon:coupon1,
    user:user1,
})

saveMongo(couponReg,"couponREg");

function saveMongo(elem, msg) {
    elem.save(function (err) {
        if (err) return console.log(err);
        console.log('Saved ' + msg);
        // saved!
    });
}
