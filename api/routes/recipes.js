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

module.exports = router;
