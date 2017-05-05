var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var salt = bcrypt.genSaltSync(10);
//引入数据库包
var db = require('../db/dbconfig');

router.get('/login', function (req, res, next) {
	res.render('login',{
		title: "用户登录"
	})
});
router.post('/login', function (req, res, next) {
	var userName = req.body.email
	var userPWD = req.body.password
	var hash = bcrypt.hashSync(userPWD, salt);
	// var checkPwd = 'select userPassword from user where userName = '+ userName
	var checkPwd = 'select * from user where userName = "' + userName +'" '
	db.query(checkPwd,function(err,result){
		if(err){
			console.log(err);
		}
		if(!result){
			console.log('用户名为空');
		}
		bcrypt.compare(userPWD,result[0].userPassword,function(err){
			if(err){
				console.log(err);
			}
			else{
				console.log('登录成功');
				res.redirect('/');
			}
		})
	})
});
module.exports = router;