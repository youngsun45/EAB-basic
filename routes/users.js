var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users', { title: '测试标题' });
});

module.exports = router;
