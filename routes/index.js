var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/createzone', function(req, res, next) {
  res.render('create-zone', null);
});
router.get('/createcomment', function(req, res, next) {
  res.render('create-comment', null);
});

module.exports = router;
