var express = require('express');
var router = express.Router();
var googleData = require('../googledata.json');

/* GET About Page. */
router.get('/', function(req, res, next) {
  res.render('About',{
	  title: 'About',
	  nameVar: 'SL',
	  googleDataVar: googleData 
  });
});

module.exports = router;
