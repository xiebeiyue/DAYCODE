var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mongoose  = require('./db');
var bodyParser = require('body-parser');
var setting  = require('./setting');
var flash = require('connect-flash');
var session  = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: setting.cookieSecret,
	key: setting.db,
	cookie: {maxAge: 60000},
	resave: false,
	saveUninitialized: true,
}));
app.use(flash());
// app.use(function (req, res) {
//   	res.setHeader('Content-Type', 'text/plain')
//   	res.write('you posted:\n')
//  	 res.end(JSON.stringify(req.body, null, 2))
// 	});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(function(req,res,next){
	res.locals.errors = req.flash('error');
	res.locals.infos = req.flash('info');
	res.locals.success = req.flash('success');
	next();
});

module.exports = app;
