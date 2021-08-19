var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../middleware/async-handler');
const { Recipe } = require('../models');
const { User } = require('../models');  

/* GET home page. */
router.get('/recipes', asyncHandler(async(req, res) => {
  // Find all the recipes in the database
  const recipes = await Recipe.findAll();
  res.status(200).json(recipes.map(recipe => recipe.get({ plain: true }))).end();
}));

// Return recipe based on passed ID and owner of that course
router.get('/courses/:id', asyncHandler(async(req, res) => {
  // Find a specific course in DB
  // and exclude and include certain data
  // const course = await Course.findOne({
  //     where: { id: req.params.id },
  //     attributes: { exclude: ['createdAt', 'updatedAt'] },
  //     include: [
  //         {
  //             model: User,
  //             as: 'owner',
  //             attributes: ['firstName', 'lastName', 'emailAddress']
  //         },
  //     ],
  // });
  const recipe = await Recipe.findOne({
    where: {id: req.params.id}
  })
  res.json(recipe).status(200).end();
}));

// Create a new recipe
router.post('/recipes', asyncHandler(async (req, res) => {
  try {
    let recipe = req.body;
    await Recipe.create(recipe);
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
