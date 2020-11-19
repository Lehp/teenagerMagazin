var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pdf/GrowingUp-preview.pdf', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, 'public/pdf/GrowingUp-preview.pdf'))
});

module.exports = router;
