const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 'rafe--001', email: 'raffe@fakemail.com' }, 'supersecretpassword', {
    expiresIn: '1h'
});

console.log('token:', token);