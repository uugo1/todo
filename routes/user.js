
var express = require('express');
var router = express.Router();
var user = require('../controllers/userController');

 // todo Routes
router.get('/user', user.list_all_user);
router.post('/user', user.create_a_user);
router.post('/user/auth', user.login_a_user);

module.exports = router;
