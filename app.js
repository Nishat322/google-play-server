/* eslint-disable indent */
'use strict';
const express = require('express');
const morgan = require('morgan');

const playstore = require('./playstore');

const app = express();
app.use(morgan('dev'));

app.get('/app', (req,res) => {
    const {sort, genre} = req.query;
    if (sort) {
        if (!['app', 'rank'].includes(sort)) {
          return res.status(400).send('Sort must be one of app or rank');
        }
    }
    if (genre){
        if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)){
            return res.status(400).send('Genre must include Action, Puzzle, Strategy, Casual, Arcade, or Card');
        }
    }
    if (sort) {
        playstore.sort((a, b) => {
          return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
        });
    }
    res.json(playstore);

});

app.listen(8080,() => {
    console.log('App listening at server port 8080');
});

