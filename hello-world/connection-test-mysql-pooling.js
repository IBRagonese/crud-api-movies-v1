var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '', // Your password
    database: 'cine'
})

pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query('SELECT * FROM peliculas', function (error, results, fields) {
        if (error) throw error;

        console.log(results);
        
        console.log(fields);

        results.forEach(pelicula => {
            console.log(`Id: ${pelicula.Id}`);
        });
    });
});

module.exports = pool;

