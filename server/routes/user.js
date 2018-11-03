var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* GET users listing. */
router.get('/:cpf', userController.getUser);
router.put('/:cpf/points', userController.putPoints);


module.exports = router;
