var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '123456789Rago',
    database: 'cine'
});

module.exports = pool;