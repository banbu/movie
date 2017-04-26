var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db = require('../db/dbconfig.js')

/* GET detail page. */
router.get('/detail/:id', function(req, res, next) {
  var id = req.params.id;
  db.query('select * from movies where id = ' + id, function (err, rows) {
    res.render('detail',{
		title: '详情页',
    	movie: rows
	});
  })
});
module.exports = router;