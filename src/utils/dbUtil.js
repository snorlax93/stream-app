var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'chappo',
    password: 'milton',
    databse: 'chigaco'
});

module.exports = connection;