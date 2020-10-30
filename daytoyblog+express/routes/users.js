var express = require('express');
var router = express.Router();
var User  = require('../models/users');

/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.render('login',);
});
router.get('/register', function(req, res, next) {
  res.render('register',);
});

router.post('/users/login',function(req,res){
	var email=req.body.email;
	var password=req.body.password;
	console.log(req.body);
	User.findOne({
		email:email,
	},function(err,data){
		if(data){
			req.flash('error','邮箱已被注册')
		}else{
			var user = new User({
				email:email,
				password:password
			});
			user.save();
			req.flash('success','注册成功')
			res.render('/users/login')
			// User.create(postData,function(err,data){
			// 	if(err) throw err;
				
			// })
		}
	})
});
router.post('/admin',function(req,res){
	var email=req.body.email;
	var password=req.body.password;
	User.findOne({
		email:email,
		password:password
	},function(err,data){
		if(err) throw err;
        if(data){
            req.flash('success','登陆成功');
            res.render('/admin')
        }else{
            req.flash('账号或密码错误');
             res.redirect('/login')
        }
	})

});

module.exports = router;
