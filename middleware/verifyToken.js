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

module.exports = verificarToken;

// This function can be found in the index.js file.
// I couldn't export it in the right way.
// Hope in the future it will be fixed.