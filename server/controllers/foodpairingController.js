const axios = require('axios')

const foodpairing = {
  getFoodpairing: (req, res, body) => {
    const options = {
      headers: {
        'X-Application-ID': 'b5378ca6',
        'X-Application-Key': '690be2968f8f08b26fcc1f2c9c8f5b90'
      }
    }
    console.log('requessssst', req)
    axios.get(`https://api.foodpairing.com/ingredients?q=${req.body.data}`, options)
      .then( response => {
        console.log('resp', response.data[0]);
        axios.get(`https://api.foodpairing.com/ingredients/${response.data[0].id}/pairings`, options)
          .then( response => {
            console.log('response', response.data[0]._links)
            console.log(response.data[0]._links.ingredient.name)
            console.log(response.data[0]._links.ingredient._links.image.size_240)
            console.log(response.data[0]._links.ingredient.description)
            res.json(response.data)
          })
      })
  }
}

module.exports = foodpairing;

// https://api.foodpairing.com/ingredients/${id}/pairings
// https://api.foodpairing.com/ingredients?q=${data}