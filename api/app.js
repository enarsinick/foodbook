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
const recipeRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create express app
const app = express();

// Enable all CORS requests
app.use(cors());

app.use(logger('dev'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', recipeRouter);
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

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {err},
  });
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
