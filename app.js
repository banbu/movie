var express = require('express')
var http = require('http')
var url = require('url')
var port = process.env.PORT || 3000 //设置访问端口
var jade = require('jade')
var app = express()
var index = require('./routes/index')
var detail = require('./routes/detail')
var admin = require('./routes/admin')
var list = require('./routes/list')
var login = require('./routes/login')
var signup = require('./routes/signup')
var bodyParser = require('body-parser')
app.locals.moment = require('moment')

app.set('views' , './views/pages')   //设置访问目录
app.set('view engine' , 'jade')		//设置模板引擎

app.use('/static', express.static('bower_components'));		//静态资源访问目录
// 因为后台录入页有提交表单的步骤，故加载此模块方法（bodyParser模块来做文件解析），将表单里的数据进行格式化
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',index)
app.use('/',detail)
app.use('/',admin)
app.use('/',list)
app.use('/',login)
app.use('/',signup)

//listen port
app.listen(port)
console.log('监听端口：' + port)