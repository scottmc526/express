var express = require('express');
var router = express.Router();
var hipstafy = require('../src/hipstafy');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresz' });
});

//var results = hipstafyFunction(req.body.userinput)
//res.render('show', {results: results})

module.exports = router;
