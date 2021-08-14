'use strict'

// Load Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// create express app
const app = express();

// Enable all CORS requests
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.use('/api', usersRouter);

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Foodbook API!',
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// async IIFE
(async () => {
  try {
    // Test connection to the database
    await sequelize.authenticate();
    console.log('Connection to database successful');
  } catch(err) {
    console.log('Error connecting to the database', err);
  }
})();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
sequelize.sync().then(() => {
  const server = app.listen(app.get('port'), () => {
    console.log(`Express server is listening on port ${server.address().port}`);
  });
})

module.exports = app;
