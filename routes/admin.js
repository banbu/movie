var express = require('express');
var router = express.Router();
//引入数据库包
var db = require('../db/dbconfig');

router.get('/admin', function(req, res, next) {
  res.render('admin', {
        title: '后台录入页',
        movie: {
            id:'',
            title: '速度与激情8',
            direction: 'F·加里·格雷',
            country: '美国',
            year: '2107/04/14',
            data: '2017/04/14',
            poster: 'http://pic1.win4000.com/pic/9/5a/4c171325727.jpg',
            flash: 'http://www.macromedia.com/go/getflashplayer" src="http://player.youku.com/player.php/sid/XMTU4OTc3NjA4NA==/v.swf',
            summary: '多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，这支曾环游世界的顶级飞车家族队伍的生活正渐趋平淡。然而，一位神秘女子Cipher的出现，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难的情义面临瓦解崩溃，前所未有的灾难考验着飞车家族',
            language: '英语'
        }
        // movie: {
        // 	id: '',
        // 	title: '',
        // 	direction: '',
        // 	country: '',
        // 	year: '',
        // 	data: '',
        // 	poster: '',
        // 	flash: '',
        // 	summary: '',
        // 	language: '',
        // }
  })
});
router.get('/admin/update/:id', function(req, res, next) {
	var id = req.params.id;
	db.query('select * from movies where id=' + id,function(err,rows){
		if(err){
			res.render('admin',{
				title: '错误页面'
			})
		}
		else{
			res.render('admin',{
				title: '后台录入页',
				movie: {
		        	id: rows[0].id,
		        	title: rows[0].title,
		        	direction: rows[0].direction,
		        	country: rows[0].country,
		        	year: rows[0].year,
		        	data: rows[0].data,
		        	poster: rows[0].poster,
		        	flash: rows[0].flash,
		        	summary: rows[0].summary,
		        	language: rows[0].language,
		        }
			})
		}
	})
});
router.post('/admin/movie/new', function (req, res) {
    
	var id = req.body.id;
    var title = req.body.title;
    var direction = req.body.direction;
    var country = req.body.country;
    var year = req.body.year;
    var poster = req.body.poster;
    var flash = req.body.flash;
    var summary = req.body.summary;
    var language = req.body.language;
    var update = new Date();
    var year = update.getFullYear();
    var month = update.getMonth() + 1;
    var day = update.getDate();
    var updateAt = year + '/' + month + '/' + day;
    if(id){
    	var sql = "update movies set title = '"+ title +"',direction = '"+ direction +"',country = '"+ country +"',year = '"+ year +"',poster = '"+ poster +"',flash = '"+ flash +"',summary = '"+ summary +"',language = '"+ language +"',updateAt = '"+ updateAt +"' where id = " + id;
    	db.query(sql,function(err,rows){
    		if (err) {
                // res.json({success:0});
                res.redirect('/admin/update'+id)                
	        } else {
                // res.json({success:1});
	            res.redirect('/admin/update/'+id);
	        }
    	})
    }
    
    else{
	    db.query("insert into movies(title,direction,country,year,poster,flash,summary,language,updateAt) values('"+ title +"','"+ direction +"','"+ country +"','"+ year +"','"+ poster +"','"+ flash +"','"+ summary +"','"+ language +"','"+ updateAt +"')", function (err, rows) {
	        if (err) {
               
	           res.redirect('/admin');
               // res.json({success:2});
	        } else {
	            res.redirect('/admin');
                // res.json({success:3});
	        }
	    })
    }
});
module.exports = router;