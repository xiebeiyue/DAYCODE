var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});
router.get('/admin', function(req, res, next) {
  res.render('admin',);
});
router.get('/detail', function(req, res, next) {
  res.render('detail',);
});
router.get('/gather', function(req, res, next) {
  res.render('gather',);
});
router.get('/sort', function(req, res, next) {
  res.render('sort',);
});
router.get('/tag', function(req, res, next) {
  res.render('tag',);
});
router.get('/message', function(req, res, next) {
  res.render('message',);
});

module.exports = router;
