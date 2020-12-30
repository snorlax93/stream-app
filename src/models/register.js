var mysql = require('../utils/dbUtil.js');
var errorUtil = require('../utils/errorUtil');

function checkExistsAll(userHandle, userName, userEmail) {
    var payload = {
        "userhandle": userHandle,
        "username": userName,
        "useremail": userEmail
    };
    mysql.connection.query('SELECT * FROM users WHERE ?', payload, function (error, results) {
        if (error) {
            errorUtil.errorReporting(req, 'SEVERE', 'There was an issue with the query. [FAILURE]', error);
        } else {
            errorUtil.errorReporting(req, 'WARNING', 'userHandle, userName, and userEmail do not exist. [SUCCESS]');
        }
    })
}

function checkExistsUserHandle(userHandle, req) {
    mysql.connection.query('SELECT * FROM users WHERE userhandle = ?', userHandle, function (error, results) {
        if (error) {
            errorUtil.errorReporting(req, 'SEVERE', 'There was an issue with the query. [FAILURE]', error);
        } else {
            errorUtil.errorReporting(req, 'WARNING', 'userHandle does not exist. [SUCCESS]');
        }
    });
}

function checkExistsUserName(userName, req) {
    mysql.connection.query('SELECT * FROM users WHERE username = ?', userName, function (error, results) {
        if (error) {
            errorUtil.errorReporting(req, 'SEVERE', 'There was an issue with the query. [FAILURE]', error);
        } else {
            errorUtil.errorReporting(req, 'WARNING', 'userName does not exist. [SUCCESS]');
        }
    });
}

function checkExistsUserEmail(userEmail) {
    mysql.connection.query('SELECT * FROM users WHERE useremail = ?', userEmail, function (error, results) {
        if (error) {
            errorUtil.errorReporting(req, 'SEVERE', 'There was an issue with the query. [FAILURE]', error);
        } else {
            errorUtil.errorReporting(req, 'WARNING', 'userEmail does not exist. [SUCCESS]');
        }
    });
}