var express = require('express');
var router = express.Router();
var itemController = require("../controllers/itemController")

/* GET users listing. */
router.get('/', itemController.getItems);


module.exports = router;
