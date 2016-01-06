var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'This is the song that never ends', pic:"http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg" , nextPg:'verse2', home:'/'});
});

router.get('/verse2', function (req, res, next) {
  res.render('index', {title: 'It goes on and on my friends', pic:"http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg", nextPg:'verse3', home:'/'})
})

router.get('/verse3', function(req, res, next){
  res.render('index', {title: 'Some people, started singing it not knowing what it was', pic:"http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg", nextPg:'verse4', home:'/'})
})

router.get('/verse4', function(req, res, next){
  res.render('index', {title:'And they will continue singing it forever just because', pic:"http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg" , nextPg:'/', home:'/'} )
})

module.exports = router;
