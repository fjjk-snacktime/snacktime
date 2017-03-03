const axios = require('axios');

const recipes = {
  getRecipeList: (req, res, next) => {
      console.log(req.body.data);
    const options = {
      headers: { "X-Mashape-Key": "qAjqbB5sPamshJwWJJh01Y3exb3Jp1wBzcOjsnrqegcRf1PCXT" },
      params: { fillIngredients: false, limitLicense: false, ingredients: req.body.data, ranking: 1 }
    }
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', options)
      .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  },
  getRecipe: (req, res, next) => {
    const options = {
      headers: {
        "X-Mashape-Key": "qAjqbB5sPamshJwWJJh01Y3exb3Jp1wBzcOjsnrqegcRf1PCXT"
      }
    };
    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.body.data}/information`, options)
      .then( resp => {
        console.log('resp.data', resp.data)
        console.log('resp.DATATATATA', resp.data.analyzedInstructions[0].steps);
        res.json(resp.data);
      })
  }
}

module.exports = recipes;