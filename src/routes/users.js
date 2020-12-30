var express = require('express');
var router = express.Router();
var errorUtil = require('../utils/errorUtil');

/* GET users listing. */
router.get('/register', function(req, res, next) {
  errorUtil.errorReporting(req, 'WARNING', 'The registration page was viewed by IP - ' + req.connection.remoteAddress, null);
  res.render('register', { title: 'Register', message: 'Please register below. You will need a @handle, user-name, and email address. Press continue when you are ready.' });
});

module.exports = router;
