var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* GET users listing. */
router.get('/:cpf', userController.getUser);
router.put('/:cpf/points', userController.putPoints);
router.get('/:cpf/coupons', userController.getCouponHistory);
router.get('/:cpf/items', userController.getItemHistory);
router.post('/:cpf/purchase', userController.purchaseCoupon);
router.get('/:cpf/statement', userController.pointsStatement);



module.exports = router;
