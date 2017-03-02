const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const foodpairingController = require('./controllers/foodpairingController.js');
const recipesController = require('./controllers/recipesController.js');
const cameraController = require('./controllers/cameraController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/foodPairing', foodpairingController.getFoodpairing);
app.post('/recipeList', recipesController.getRecipeList);
app.post('/recipeSelector', recipesController.getRecipe);
app.post('/compareRecipes', recipesController.compareRecipes);

module.exports = app;