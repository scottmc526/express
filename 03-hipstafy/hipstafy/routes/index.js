var express = require('express');
var router = express.Router();
var hipstafy = require('../src/hipstafy.js');
// var results = hipstafy(req.body.userinput)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', req.body.userInput);
});

// router.get('/show', function(req, res, next){
//   res.render('show')
// })

router.post('/show', function(req, res, next){
  var input = req.body.userInput;
  var hipstafied = hipstafy(input);
  res.render('show', {hipstafied});
})


module.exports = router;
