const axios = require('axios');

const recipes = {
  getRecipeList: (req, res, next) => {
      console.log(req.body.data);
    const options = {
      headers: { "X-Mashape-Key": "OxcC40wXNtmshBb2QuFhuTG8xcUXp1huVw2jsnLmhpBuxYNOI8" },
      params: { fillIngredients: false, limitLicense: false, ingredients: req.body.data, ranking: 1 }
    }
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', options)
      .then(resp => {
        console.log(resp.data);
        res.json(resp.data.results);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  },
  getRecipe: (req, res, next) => {
    const options = {
      headers: {
        "X-Mashape-Key": "OxcC40wXNtmshBb2QuFhuTG8xcUXp1huVw2jsnLmhpBuxYNOI8"
      }
    }
    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.body.data}/analyzedInstructions`, options)
      .then( resp => {
        console.log('resp.data', resp.data)
        console.log('resp.DATATATATA', resp.data[0].steps[0].ingredients);
        res.json(resp.data[0]);
      })
  }
}

module.exports = recipes;