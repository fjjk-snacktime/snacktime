const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const foodpairingController = require('./controllers/foodpairingController.js');
const recipesController = require('./controllers/recipesController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/foodpairing', foodpairingController.getFoodpairing);
app.post('/recipeList');
app.post('/recipeSelector')

module.exports = app;