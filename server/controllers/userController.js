const axios = require('axios');
const dbController = require('../utils/queries.js')

module.exports = {
  deleteRecipe: (req, res, next) => {
    dbController.deleteRecipe(req.body.data, (err, user) => {
      res.send();
    })
  },

  findUser: (req, res, next) => {
    dbController.findUserId(req.query.ID, (err, data) => {
      if(err) {
    		console.log(err);
    }
    res.send(data);
    })
  },

  createUser: (req, res, next) => {
    const newUser = {
      'name': 'testing',
      'FacebookUserID': req.body.id,
      'InstagramToken': [],
      'FavoriteRecipe': [],
    }
    dbController.insertNewUser(newUser, (err, data) => {
      if(err) {
        console.log(err);
      }
      console.log('server created user', data)
      res.send(data)
    })
  },
  addRecipe: (req, res, next) => {
    let facebookuserid = req.body.facebookuserid
    const saveRecipe = {
      "name": req.body.name,
      "id": req.body.id,
      "image": req.body.image,
      "analyzedInstructions": req.body.analyzedInstructions
    }
    dbController.createRecipe(saveRecipe, (err, newRecipe) => {
      if(err) {
        console.log(err);
      }
      let newR = newRecipe;
      dbController.findUserId(facebookuserid, (err, user) => {
        if(err) {
      		console.log(err);
      	}
        user[0].FavoriteRecipe.push(newR)
        user[0].save(function(err, user, num){
          if(err) {
            console.log(err)
          }
        });
      })
    })
  }
}
