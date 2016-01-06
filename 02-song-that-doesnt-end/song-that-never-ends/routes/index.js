var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the song that never ends' });
});

router.get('/verse2', function (req, res, next) {
  res.render('verse2', {title: 'It goes on and on my friends', pic:"http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg"})
})

router.get('/verse3', function(req, res, next){
  res.render('verse3', {title: 'Some people, started singing it not knowing what it was'})
})

router.get('/verse4', function(req, res, next){
  res.render('verse4', {title:'And they will continue singing it forever just because'})
})

module.exports = router;
