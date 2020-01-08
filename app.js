// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
    // var cookieParser = require('cookie-parser');
    // var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zoosRouter = require('./routes/zoos');
var bookRouter = require('./routes/book');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/zoos', zoosRouter);
app.use('/book', bookRouter);


app.post('/upload', upload.single('avatar'), function(req, res) {
    let  file  = req.file
    console.log(file);

    fs.copyFile(__dirname + '/' + file.path, __dirname + '/public/images/' + file.originalname, function(err) {
        if (!err) {
            res.send('success')
        }
    })
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;