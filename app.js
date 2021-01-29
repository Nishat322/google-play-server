/* eslint-disable indent */
'use strict';
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/app', (req,res) => {

});

app.listen(8080,() => {
    console.log('App listening at server port 8080');
});

