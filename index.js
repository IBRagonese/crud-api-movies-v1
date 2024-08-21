const express = require('express');
const app = express();

var pool = require('./dao/dbConnection');
var models = require('./dao/models');

const Pelicula = require('./dao/models');
var jwt = require('jsonwebtoken');

const port = 3000;

app.use(express.json());

app.get('/peliculas/todas', (req, res) => {
    pool.query('SELECT * FROM peliculas', function (error, results) {
        if (error) throw error;

        res.send(results)
        console.log('Todas las películas.');
    });
});

app.get('/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM peliculas WHERE id = ?', [id], function (error, results) {
        if (error) throw error;

        res.send(results)
        console.log(`Película con id: ${id}`)
    });
});

app.post('/peliculas/agregar', verificarToken, (req, res) => {
    const pelicula = new Pelicula;

    pelicula
        .setNombre(req.body.Nombre)
        .setLanzamiento(req.body.Lanzamiento)
        .setGenero(req.body.Genero)
        .build();

    pool.query('INSERT INTO peliculas VALUES (NULL, ?, ?, ?)',
        [pelicula.nombre, pelicula.lanzamiento, pelicula.genero],
        function (error, results) {
            if (error) throw error;

            res.send('Película agregada con éxito.');

            console.log('Película agregada con éxito.');
        }
    );
});

app.put('/peliculas/modificar/:id', verificarToken, (req, res) => {
    const id = parseInt(req.params.id);

    const pelicula = new Pelicula;

    pelicula
        .setNombre(req.body.Nombre)
        .setLanzamiento(req.body.Lanzamiento)
        .setGenero(req.body.Genero)
        .build();

    pool.query('UPDATE peliculas' +
        ' SET nombre = ?, lanzamiento = ?, genero = ?' +
        ' WHERE id = ?',
        [pelicula.nombre, pelicula.lanzamiento, pelicula.genero, id],
        function (error, results) {
            if (error) throw error;

            res.send('Película modificada con éxito.');

            console.log('Película modificada con éxito.');
        }
    );
});

app.delete('/peliculas/eliminar/:id', verificarToken, (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM peliculas WHERE id = ?', id, function (error, results) {
        if (error) throw error;

        res.send('Película eliminada con éxito.');

        console.log('Película eliminada con éxito.');
    });
});

app.post('/acceder', (req, res) => {
    const nombreUsuario = req.body.Usuario; 
    const contraseña = req.body.Contraseña; 

    pool.query('SELECT * FROM usuarios WHERE nombre = ?', nombreUsuario, function (error, results) {
        if (error) throw error;

        results.forEach(usuario => {
            if (usuario.Nombre === nombreUsuario && usuario.Clave === contraseña) {
                const token = jwt.sign({ nombreUsuario }, 'secret', { expiresIn: "1h" }); 
                return res.json({ token });
            } else {
                return res.json({ message: 'La autenticación falló.' });
            }
        });
    });
});


app.get('/protected', verificarToken, (req, res) => {
    return res.json({ message: 'Tenés acceso.' });
});

app.listen(port, () => {
    console.log('App listening port:', port);
});

// This function belogns in the middleware directory.
// It's working now.
// Not his place tho.
// The original name is verifyToken.

function verificarToken(req, res, next) {
    const header = req.header('Authorization');
    const token = header.split(' ')[1];
    if (!token) {
        return res.json({ message: 'No se encontró token' });
    }
    try {
        const payload = jwt.verify(token, 'secret');
        req.nombreUsuario = payload.nombreUsuario;
        next();
    } catch (error) {
        return res.json({ message: 'Token no valido.' });
    }
}


