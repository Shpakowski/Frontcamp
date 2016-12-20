var express = require('express');
var config = require('nconf');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',  config: config.get('database') });
});

module.exports = router;
