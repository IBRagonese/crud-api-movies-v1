const jwt = require('jsonwebtoken');

const secretKey = '1234Rago';

const newToken = jwt.sign(
    {
        email: 'rago@mail.com',
        password: '5678Raguito'
    },
    secretKey,
    {
        expiresIn: 600
    }
);

const ourToken = jwt.decode(newToken) 

console.log(ourToken);

