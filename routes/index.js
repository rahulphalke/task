var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/UserController');
const { userLoginValidation } = require('../config/validation');

/* GET home page. */
router.get('/',user_controller.register);
router.get('/user-list',  user_controller.UsersList);
router.post('/check-email',  user_controller.CheckEmail);
router.post('/save-user',  user_controller.InsertUser);

module.exports = router;
