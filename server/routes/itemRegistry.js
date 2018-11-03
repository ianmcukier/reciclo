var express = require('express');
var router = express.Router();
var itemRegController = require('../controllers/itemController')

/* GET home page. */
router.get('/', itemRegController.getItemRegistry);

module.exports = router;
