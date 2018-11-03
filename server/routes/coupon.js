var express = require('express');
var router = express.Router();
var couponController = require("../controllers/couponController")

/* GET users listing. */
router.get('/', couponController.getCoupon);


module.exports = router;
