var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var bcrypt = require('bcrypt')

var db = require('../db/dbconfig')
// 定义加密密码计算强度
var salt = bcrypt.genSaltSync(10);
router.get('/signup',function(req,res,next){
	res.render('signup',{
		title: "用户注册"
	})
})

router.post('/signup',function(req,res,next){
	var userName = req.body.email;
	var userPWD = req.body.password;
	var hash = bcrypt.hashSync(userPWD, salt);
    var addUser = 'insert into user(userName,userPassword) values("'+ userName +'","'+ hash +'")'
	db.query(addUser,function(err,result){
		if(err){
			console.log(err);
		}
		else{
			res.redirect('/');
		}
	})
})

module.exports = router