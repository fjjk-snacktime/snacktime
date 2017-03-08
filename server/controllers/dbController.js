const mongoose = require('mongoose');
const UserModel = require('../../db/models/user');
const RecipeModel = require('../../db/models/recipe');

mongoose.connect('mongodb://localhost/snacktimetest');

// var testingUser = {
//   'name': 'KevinWong',
//   'FacebookUserID': '10210392928233310',
//   'FavoriteRecipe': [],
// }

// var testingUser = {
//   'name': 'joey',
//   'FacebookUserID': '123982792837927497',
//   'InstagramToken': ['testing'],
//   'FavoriteRecipe': ['chicken', 'soup', 'fish', 'duck'],
// }

// Find alluser

const findAllUser = (user) => {
  UserModel.find(function(err, user){
    if(err) {
      return err
    } else {
      console.log(user)
    }
  })
}

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

// Meetings.update({ "_id": MeetingId },
//     {$push: { "messages": message }},
//     function(err, numAffected) {
//       if(err) {//handle error}
//       else {
//         //do something depending on the number of documents affected
//       }});

exports.insertNewUser = insertNewUser;
exports.findAllUser = findAllUser;
exports.findUserId = findUserId;
exports.createRecipe = createRecipe;
exports.AddUserFavorRecipe = AddUserFavorRecipe;

// insertNewUser(testingUser)
// findAllUser();
// AddUserFavorRecipe('12948398298293', 'duck with dumpling')
// findUserId('10210392928233310')
