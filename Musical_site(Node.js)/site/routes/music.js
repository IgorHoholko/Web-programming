var express = require('express');
var router = express.Router();

var test=require('../public/mus.json');
var test_json = JSON.stringify(test);
var test_ob= JSON.parse(test_json);

router.get('/', function(req, res) {
	res.render('music_page',{
		flag: test_ob
	});
});

module.exports = router;
