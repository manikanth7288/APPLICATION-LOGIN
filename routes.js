const express = require('express');
const { registerUser, loginUser } = require('./users');
const { authenticateToken } = require('./auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;
