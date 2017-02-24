const axios = require('axios');

const recipes = {
  getRecipeID: (req, res, next) => {
    let string = data.split(' ').join('+');
    console.log('STRING', string)
    const options = {
      headers: {
        "X-Mashape-Key": "f9B4tJmyAkmshyA3mr2ywH4ZNTddp1GXKGIjsnQ0yFRerJT98E"
      },
      params: {
        instructionsRequired: false,
        offset: 0,
        query: data
      }
    }
    return axios.get(`"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search`, options)
    // return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/search', options)
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