const mongoose = require('mongoose');
const Users = require('../../db/models/user');
const Recipes = require('../../db/models/recipe');

mongoose.connect('mongodb://localhost/snacktimetest');

module.exports = {

  insertNewUser: (user, callback) => {
    Users.create(user, callback);
  },

  // Find User with same id
  findUserId: (userid, callback) => {
    Users.find({FacebookUserID: userid}, callback);
  },

  // Create recipe schema
  createRecipe: (recipeinfo, callback) => {
    Recipes.create(recipeinfo, callback);
  },

  // Add UserFavorRecipe
  AddUserFavorRecipe: (userid, recipe, callback) => {
    Users.update(userid, recipe, callback);
  },

  // Delete Recipe
  deleteRecipe: (data, callback) => {
    let {recipeId, userId} = data;
    console.log(recipeId, userId.userID)
    Users.findOne({ FacebookUserID: userId.userID }, (err, user) => {
      console.log(user);
      if (err) console.error(err);
      else {
        for (let i = 0; i < user.FavoriteRecipe.length; i ++) {
          if (recipeId === user.FavoriteRecipe[i].id) {
            user.FavoriteRecipe.splice(i, 1);
            console.log('USER FAVORITE RECIPE', user.FavoriteRecipe);
            user.save(callback(err, user));
          }
        }
      }
    })
  }

}
