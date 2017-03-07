const mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: String,
  id: String,
  image: String,
  analyzedInstructions: Array
});

var RecipeModel = mongoose.model('RecipeModel', recipeSchema);

module.exports = RecipeModel;


// work on creating a recipe schema

// when user save recipe it will fire a axios call to db and save that recipe
// work on updating the user recipe list
