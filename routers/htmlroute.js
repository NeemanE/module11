const path = require('path');
const fs = require('fs');

const express = require('express');
const router = express.Router();

const paths = (name) => path.join(__dirname, '..', 'public', `${name}.html`);

router.get('/notes', (req, res) => {
    res.sendFile(paths("notes"));
});

router.get('*', (req, res) => {
    res.sendFile(paths("index"));
});

module.exports = router;