var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //View-Model es title:'Express'
 // res.render('index', { title: 'Express' });
  res.render('index', { title: 'Express',author:'Brenda nataly'});
});

module.exports = router;
