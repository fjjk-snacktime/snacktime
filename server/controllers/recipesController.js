const recipesKey = require('./apiKeys.js').recipesKey;
const axios = require('axios');

const recipes = {
  getRecipeList: (req, res, next) => {
    const options = {
      headers: { "X-Mashape-Key": recipesKey },
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
        "X-Mashape-Key": recipesKey
      }
    };
    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.body.data}/information`, options)
      .then( resp => {
        console.log('resp.data', resp.data)
        console.log('resp.DATATATATA', resp.data.analyzedInstructions[0].steps);
        res.json(resp.data);
      }).catch( err => {
        console.error(err);
      })
  },
  compareRecipes: (req, res, next) => {
    const idArray = req.body.data;
    const results = [];
    const options = {
      headers: { "X-Mashape-Key": recipesKey },
    }
    for (let id of idArray) {
      axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, options)
        .then( resp => {
          for (let ingredient of resp.data.extendedIngredients) {
            // console.log(ingredient.id, ingredient.amount, ingredient.unit)
            const options = {
              headers: { "X-Mashape-Key": recipesKey },
              params: { amount: ingredient.amount, unit: ingredient.unit}
            }
            axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/${ingredient.id}/information`, options)
              .then( resp => {
                let obj = {};
                // console.log(resp.data.nutrition.nutrients)
                // let nutrient = resp.data.nutrition.nutrients[0]
                for (let nutrient of resp.data.nutrition.nutrients) {
                  // console.log('hi')
                  if (!obj[nutrient.title]){
                    obj[nutrient.title] = [nutrient.amount, nutrient.unit];
                  } else {
                    obj[nutrient.title][0] += nutrient.amount;
                  }
                }
                // console.log(obj)
                results.push(obj);
                if (results.length === 2) {
                  console.log(results);
                  res.send(results);
                }
              }).catch( err => {
                // console.log(err)
              })
          }
          // console.log(results);
        }).catch( err => {
          console.log(err);
        })
    }
  }
}

module.exports = recipes;