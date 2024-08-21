var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '' // Your password
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) 
{
    if (err) throw err;
    console.log('The solution is:', rows[0].solution);
    console.log('The connection is:', connection.state);
})

connection.end();