var express = require('express');
var router = express.Router();
var tradeController = require("../controllers/tradeController")


router.get('/', tradeController.getAllTrades);
router.get('/:name', tradeController.getTrade);
router.get('/:name/items', tradeController.getItemHistory);


module.exports = router;
