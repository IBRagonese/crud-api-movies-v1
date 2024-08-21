const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'secret';
const pool = require('./connection-test-mysql-pooling');


app.use(express.json());

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    pool.query('SELECT * FROM usuarios WHERE nombre = ?', username, function (error, results) {
        if (error) throw error;

        results.forEach(usuario => {
            if (usuario.Nombre === username && usuario.Clave === password) {
                // console.log('Autenticación exitosa!');
                const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
                return res.json({ token });
            } else {
                return res.json({ message: 'La autenticación falló.' });
            }
        });
    });
});

function verifyToken(req, res, next) {
    const header = req.header('Authorization');
    const token = header.split(" ")[1];
    if (!token) {
        return res.json({ message: 'No se encontró token' });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        req.username = payload.username;
        next();
    } catch (error) {
        return res.json({ message: 'Token no valido.' });
    }
}

app.get('/protected', verifyToken, (req, res) => {
    return res.json({ message: 'Tenés acceso.' });
});

app.listen(port, () => {
    console.log('Listen at:', port)
});