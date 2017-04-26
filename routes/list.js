var express = require('express');
var router = express.Router();
//引入数据库包
var db = require('../db/dbconfig');
/*** 查询列表页 ***/
router.get('/list', function (req, res, next) {
    db.query('select * from movies', function (err, rows) {
        if (err) {
            res.render('list',{
            	title: '后台列表页', movie: []
            });
        }
        else{
        	res.render('list',{
        		title: '后台列表页',
                movie: rows
        	});
        }
    })
});
/*** 删除数据 ***/
router.get('/list/:id', function (req, res) {
    var id = req.params.id;
    db.query("delete from movies where id=" + id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.json({success: 1});
        }
    });
});

module.exports = router;