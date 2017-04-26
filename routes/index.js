var express = require('express')
var router = express.Router()
//引入数据库包
var db = require('../db/dbconfig');
// ... 省略
router.get('/', function (req, res, next) {
    db.query('select * from movies', function (err, rows) {
        if (err) {
            res.render('index',{
            	title: '首页', movie: []
            });
        }
        else{
        	res.render('index',{
        		title: '首页',
                movie: rows
        	});
        }
    })
});
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', {
//         title: ' 首页',
//         movie: movies
//     });
// });

module.exports = router;