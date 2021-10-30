var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var utilizadorRouter = require('./routes/utilizadorRoutes');
var eventoRouter = require('./routes/eventoRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/utilizadores', utilizadorRouter);
app.use('/api/eventos', eventoRouter);

module.exports = app;

