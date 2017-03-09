const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const foodpairingController = require('./controllers/foodpairingController.js');
const recipesController = require('./controllers/recipesController.js');
const cameraController = require('./controllers/cameraController.js');
const userController = require('./controllers/userController.js')

// connect to local database
// mongoose.connect('mongodb://localhost/snacktimetest');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/foodPairing', foodpairingController.getFoodpairing);
app.post('/recipeList', recipesController.getRecipeList);
app.post('/recipeSelector', recipesController.getRecipe);
app.post('/compareRecipes', recipesController.compareRecipes);
app.post('/getFoodID', foodpairingController.getFoodID);
app.post('/getMultipleFoodpairings', foodpairingController.getMultipleFoodpairings);
app.post('/deleteRecipe', userController.deleteRecipe);
app.get('/findUser', userController.findUser);
app.post('/createUser', userController.createUser);
app.post('/AddRecipe', userController.addRecipe);

module.exports = app;
