var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller')

router.post('/login', UserController.login)
router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getOneUser)
router.post('/users', UserController.setOneUser)

module.exports = router;