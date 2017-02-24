const axios = require('axios');

const recipes = {
  getRecipeList: (req, res, next) => {
    console.log('request body data', req.body.data);
    const options = {
      headers: { "X-Mashape-Key": "f9B4tJmyAkmshyA3mr2ywH4ZNTddp1GXKGIjsnQ0yFRerJT98E" },
      params: { instructionsRequired: false, offset: 0, query: req.body.data }
    }
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search', options)
      .then(resp => {
        res.json(resp.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  },
  getRecipe: (req, res, next) => {
    const options = {
      headers: {
        "X-Mashape-Key": "f9B4tJmyAkmshyA3mr2ywH4ZNTddp1GXKGIjsnQ0yFRerJT98E"
      }
    }

    return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/${id}`, options)
  }
}

module.exports = recipes;