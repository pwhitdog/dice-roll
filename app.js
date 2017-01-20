var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');

var app = express();

// view engine setup
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist/')));

app.use('/', function(req, res) {
    res.render('index', { title: 'Dice Roller!' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
