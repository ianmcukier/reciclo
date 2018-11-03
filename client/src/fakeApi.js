export default {
  user: "Rubens",
  contribution:{
    _id: "5bddac781b126c6f746d2d35",
    user: "5bddac781b126c6f746d2d30",
    trade: {
      address: {
        street: "Rua da Reciclagem",
        state: "Rio de Janeiro",
        city: "RJ",
        cep: 22222222
      },
      _id: "5bddac781b126c6f746d2d33",
      name: "Botafogo I",
      email: "reciclo.botafogo@reciclo.com.br",
      phone: 123456777,
      __v: 0
    },
    totalPoints: 50,
    exchange: [
      {
        item: {
          exchange: {
            quantity: 1,
            metric: "gramas"
          },
          _id: "5bddac781b126c6f746d2d31",
          type: "organico",
          value: 10,
          __v: 0
        },
        quantity: 3
      },
      {
        item: {
          exchange: {
            quantity: 5,
            metric: "unidades"
          },
          _id: "5bddac781b126c6f746d2d32",
          type: " inorganico",
          value: 20,
          __v: 0
        },
        quantity: 1
      }
    ],
    date: "2018-11-03T14:11:04.088Z",
    __v: 0
   },
  coupons: [{
    img: "http://revistaespresso.com.br/wordpress/wp-content/uploads/2017/12/E55_DSC04037.jpg",
    title: 'Cafeteria',
    exchange: "15%"
  },
  {
    img: "https://i.pinimg.com/originals/6d/e1/70/6de17008b1a3a2ba566c0e90fa5b3cec.jpg",
    title: 'Hamburgueria',
    exchange: "25%"
  },
  {
    img: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: 'IPTU',
    exchange: "5%"
  },
  {
    img: "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: 'Evento Cultural',
    exchange: "10%"
  }],
  couponRegistry: {
    registry1: {
      coupon: "Supermercado - Desconto 15%",
      purchaseDate: "Nov 01, 2018",
      usageDate: "",
      status: "NEW",
    },
    registry2: {
      coupon: "Cafeteria- Desconto 45%",
      purchaseDate: "Oct 13, 2018",
      usageDate: "Oct 23, 2018",
      status: "USED",
    },
    registry3: {
      coupon: "Conta de Luz - Desconto 20%",
      purchaseDate: "Oct 22, 2018",
      usageDate: "Oct 15, 2018",
      status: "USED",
    },
   
  }
};
