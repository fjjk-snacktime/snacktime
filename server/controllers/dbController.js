const mongoose = require('mongoose');
const UserModel = require('../../db/models/user');
const RecipeModel = require('../../db/models/recipe');

mongoose.connect('mongodb://localhost/snacktimetest');

// var testingUser = {
//   'name': 'KevinWong',
//   'FacebookUserID': '10210392928233310',
//   'FavoriteRecipe': [],
// }

// Create user function
const insertNewUser = (user, callback) => {
  UserModel.create(user, callback);
}

// Find User with same id
const findUserId = (userid, callback) => {
  UserModel.find({FacebookUserID: userid}, callback);
}

// Create recipe schema
const createRecipe = (recipeinfo, callback) => {
  RecipeModel.create(recipeinfo, callback);
}

// Add UserFavorRecipe
const AddUserFavorRecipe = (userid, recipe, callback) => {
  UserModel.update(userid, recipe, callback);
}

// Delete Recipe
const deleteRecipe = (recipeid, callback) => {
  RecipeModel.find({ id: recipeid }).remove( callback );
}


exports.insertNewUser = insertNewUser;
exports.findUserId = findUserId;
exports.createRecipe = createRecipe;
exports.AddUserFavorRecipe = AddUserFavorRecipe;
exports.deleteRecipe = deleteRecipe;

// for node use

// insertNewUser(testingUser)
// findAllUser();
// AddUserFavorRecipe('12948398298293', 'duck with dumpling')
// findUserId('10210392928233310')
