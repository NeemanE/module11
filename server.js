const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/notes', require('./routers/api'));

app.use('/', require('.routers/html'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});