const express = require('express');
const mongose = require('mongoose');
const app = express();
mongose.connect('mongodb+srv://semana:admin@cluster0-woymg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);