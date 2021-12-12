var express = require('express'); 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var utilizadorRouter = require('./routes/utilizadorRoutes');
var eventoRouter = require('./routes/eventoRoutes');
var registoRouter = require('./routes/registoRoutes');
var participoRouter = require('./routes/participoRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/utilizador', utilizadorRouter);
app.use('/api/eventos', eventoRouter);
app.use('/api/registos', registoRouter);
app.use('/api/participo', participoRouter)

module.exports = app;

