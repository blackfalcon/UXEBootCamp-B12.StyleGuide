var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Style Guide' });
});

router.get('/grid', function(req, res) {
  res.render('grid', { title: 'Grid & Layout' });
});

router.get('/color', function(req, res) {
  res.render('color', { title: 'Color' });
});

router.get('/typography', function(req, res) {
  res.render('typography', { title: 'Typography' });
});

router.get('/logo', function(req, res) {
  res.render('logo', { title: 'Logo' });
});

module.exports = router;
