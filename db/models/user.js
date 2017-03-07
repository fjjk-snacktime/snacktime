const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  FacebookUserID: String,
  InstagramToken: Array,
  FavoriteRecipe: Array
});

var UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;
