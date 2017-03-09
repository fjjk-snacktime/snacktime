import axios from 'axios';
const visionKey = require('../server/utils/apiKeys.js').visionKey;

const helpers = {
  camera: {
    imageRecognition: data => {
      const URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + visionKey;

      const request = {
        "requests":
        [
          {
            "features":
            [
              {
                "type": "LABEL_DETECTION"
              }
            ],
            "image":
            {
              "content": data
            }
          }
        ]
      }

      return axios.post(URL, request)
    }
  },
  foodpairing: {
    getFoodpairings: data => {
      const options = { data: data }
      return axios.post('http://localhost:8000/foodPairing', options)
    },
    getFoodID: data => {
      const options = { data: data }
      return axios.post('http://localhost:8000/getFoodID', options)
    },
    getMultipleFoodpairings: data => {
      const options = { data: data }
      return axios.post('http://localhost:8000/getMultipleFoodPairings', options)
    }
  },
  recipes: {
    getRecipeList: data => {
      const options = { data: data }
      return axios.post('http://localhost:8000/recipeList', options)
    },
    getRecipe: id => {
      const options = { data: id }
      return axios.post('http://localhost:8000/recipeSelector', options)
    },
    compareRecipes: arr => {
      const options = {data: arr}
      return axios.post('http://localhost:8000/compareRecipes', options)
    }
  },
  user: {
    deleteRecipe: (recipeId, userId) => {
      const options = {data: {
        userId: userId,
        recipeId: recipeId
      }};
      return axios.post('http://localhost:8000/deleteRecipe', options)
    },
    saveRecipe: (facebookId, title, id, imageUrl, ingredients) => {
      var local = 'http://localhost:8000/'
      var reqBody = {
        "facebookuserid": facebookId,
        "name": title,
        "id": id,
        "image": imageUrl,
        "analyzedInstructions": ingredients
      }
      return axios.post(`http://localhost:8000/AddRecipe`, reqBody)
    }
  }
}
export default helpers;
