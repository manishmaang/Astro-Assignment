const express = require('express');
const router = express.Router();
const { distributeFlow, astrologers, users } = require('../controllers/distributionController');


router.post('/distribute', (req, res) => {
    distributeFlow();
    res.json({ message: 'Flow distributed successfully', astrologers });
});


router.get('/astrologers', (req, res) => {
    res.json({ astrologers });
});


router.get('/users', (req, res) => {
    res.json({ users });
});


router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API. Use /distribute to distribute flow.' });
});

module.exports = router;

