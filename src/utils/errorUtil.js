var dateTimeUtil = require('./dateTime');
var mysql = require('./dbUtil');

function errorReporting(req, errorType, errorMessage, errorData) {
    errorType ? errorType : 'WARNING';
    errorMessage ? errorMessage : 'There was no message provided...';
    logLoggedIp = 'localhost'; //need to fix
    logTimeStamp = dateTimeUtil();

    if (errorType != 'WARNING') {
        sendToDB(errorMessage, errorType, 'HIGH', logLoggedIp, logTimeStamp);
    } else {
        console.log('[' +errorType+ ']Error Message: ' + errorMessage + ". Error from call: " +errorData);
    }
}

function sendToDB(logMessage, logType, logSeverity, logLoggedIp, logTimeStamp) {
    var payload = {
        "logmessage": logMessage,
        "logtype": logType,
        "logseverity": logSeverity,
        "logloggedip": logLoggedIp,
        "logtimestamp": logTimeStamp
    }
    mysql.query('INSERT INTO logs SET ?', payload, function (error, results) {
        if (error) {
            errorReporting(null, 'WARNING', 'Failed to insert data into the databse', error);
        } else {
            errorReporting(null, 'WARNING', 'Succeeded insert data into the databse', results);
        }
    });
}

module.exports = { errorReporting, sendToDB };