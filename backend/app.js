var express = require('express');
var logger = require('morgan');
const cors= require('cors');

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

module.exports = app;
