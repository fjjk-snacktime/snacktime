const pairingID = require('../utils/apiKeys.js').pairingID;
const pairingKey = require('../utils/apiKeys.js').pairingKey;
const axios = require('axios')

const foodpairing = {
  getFoodpairing: (req, res, body) => {
    const options = { headers: { 'X-Application-ID': pairingID, 'X-Application-Key': pairingKey } };
    axios.get(`https://api.foodpairing.com/ingredients?q=${req.body.data}`, options)
      .then( response => {
        axios.get(`https://api.foodpairing.com/ingredients/${response.data[0].id}/pairings`, options)
          .then( response => {
            res.json(response.data)
          })
          .catch( error => {
            console.log('Error: ', error);
          })
      })
      .catch( error => {
        console.log('Error: ', error);
      })
  },
  getFoodID: (req, res, body) => {
    const ingredients = req.body.data;
    var ingredientIds = [];

    const options = { headers: { 'X-Application-ID': pairingID, 'X-Application-Key': pairingKey } };
    for (let i = 0; i < ingredients.length; i++) {
      axios.get(`https://api.foodpairing.com/ingredients?q=${ingredients[i]}`, options)
        .then( response => {
          return response.data[0].id;
        })
        .then( id => {
          ingredientIds.push(id);

        })
        .then( () => {
          if (ingredients.length === ingredientIds.length) {
            console.log('ingredient Ids', ingredientIds);
            res.json(ingredientIds);
          }
        })
        .catch( error => {
          console.log('Error: ', error);
        })
    }
  },
  getMultipleFoodpairings: (req, res, body) => {
    const ids = req.body.data.join(', ')
    const options = { headers: { 'X-Application-ID': pairingID, 'X-Application-Key': pairingKey } };
    axios.get(`https://api.foodpairing.com/ingredients/${ids}/pairings`, options)
      .then( response => {
        console.log('multiple foodpairings', response.data);
        res.json(response.data);
      })
      .catch( error => {
        console.log('Error: ', error);
      })
  }
}

module.exports = foodpairing;
