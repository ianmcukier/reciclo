var express = require('express');
var router = express.Router();
var couponController = require('../controllers/couponController')

/* GET home page. */
router.get('/', couponController.getCouponRegistry);

module.exports = router;
