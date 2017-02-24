const axios = require('axios')

const foodpairing = {
  getFoodpairing: (req, res, body) => {
    const options = { headers: { 'X-Application-ID': 'b5378ca6', 'X-Application-Key': '690be2968f8f08b26fcc1f2c9c8f5b90' } }
    axios.get(`https://api.foodpairing.com/ingredients?q=${req.body.data}`, options)
      .then( response => {
        axios.get(`https://api.foodpairing.com/ingredients/${response.data[0].id}/pairings`, options)
          .then( response => {
            res.json(response.data)
          })
      })
  }
}

module.exports = foodpairing;
