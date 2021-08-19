var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../middleware/async-handler');
const { Recipe } = require('../models');
const { User } = require('../models');  

/* GET users listing. */
router.get('/users', asyncHandler(async(req, res, next) => {
  // Find all the users in the database
  const users = await User.findAll();
  res.status(200).json(users.map(user => user.get({ plain: true }))).end();
}));

// Create a new user
router.post('/users', asyncHandler(async (req, res) => {
  try {
    let user = req.body;
    await User.create(user);
    res.status(201)
        .location('/')
        .end();
  } catch(error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      const errors = error.errors.map(err => err.message);
      res.status(400).json({ errors });   
    } else {
      throw error;
    }
  }
}));

module.exports = router;
