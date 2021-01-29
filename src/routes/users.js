var express = require('express');
var router = express.Router();
var errorUtil = require('../utils/errorUtil');

/* GET users listing. */
router.get('/register', function(req, res, next) {
  errorUtil.errorReporting(req, 'WARNING', 'The registration page was viewed by IP - ' + req.connection.remoteAddress);
  res.render('register', { title: 'Register', message: 'Please register below. You will need a @handle, user-name, and email address. Press continue when you are ready.', regForm: true });
});

router.post('/register', function(req, res, next) {
  if(req.body.athandle && req.body.userName && req.body.emailAddress ) {
    res.render('register', { title: 'Register', message: 'Success. Good job.' });
  } else {
    res.render('register', { title: 'Register', message: 'Please fill out the form. These fields are required: <b style="color:tomato">@handle, user-name, and email address</b>!', regForm: true });
  }
});

module.exports = router;