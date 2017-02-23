const axios = require('axios');

const options = {
  headers: {
    'X-Application-ID': 'b5378ca6',
    'X-Application-Key': '690be2968f8f08b26fcc1f2c9c8f5b90'
  }
}

axios.get(`https://api.foodpairing.com/ingredients?q=chicken`, options)
  .then(resp => {
    axios.get(`https://api.foodpairing.com/ingredients/${resp.data[0].id}/pairings`, options)
      .then(response => {
        console.log(response.data[0]._links.ingredient._links.image.size_240);
        console.log(response.data[0]._links.ingredient.name);
        console.log(response.data[0]._links.ingredient.description);
      })
      .catch(error => {
        console.log(error);
      })
  })
  .catch(err => {
    console.log('Error: ', err);
  })

  //name
  // resp.data[0].name
  // resp.data[0].product
  // resp.data[0]._links.image.size_240
  // resp.data[0].description

// const options = {
//   headers: {
//     "X-Mashape-Key": "f9B4tJmyAkmshyA3mr2ywH4ZNTddp1GXKGIjsnQ0yFRerJT98E"
//   },
//   params: {
//     query: 'apple cider'
//   }
// }

// axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/search', options)
//   .then(resp => {
//     console.log('Response: ', resp.data[0]);
//   })
//   .catch(err => {
//     console.log('Error: ', err);
//   })

// Response:  { type: 'product',
//   products: 
//    [ { id: 413128,
//        title: 'Newman\'s Own Honey Apple Cider Vinaigrette',
//        image: 'https://spoonacular.com/productImages/413128-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 222896,
//        title: 'Gee Whiz Apple Cider',
//        image: 'https://spoonacular.com/productImages/222896-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 170240,
//        title: 'Apple Cider Fresh',
//        image: 'https://spoonacular.com/productImages/170240-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 186888,
//        title: 'Ahold 100% Apple Cider No Sugar Added',
//        image: 'https://spoonacular.com/productImages/186888-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 207198,
//        title: 'Musselman\'s Apple Cider',
//        image: 'https://spoonacular.com/productImages/207198-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 190513,
//        title: 'Ahold Spiced Apple Cider',
//        image: 'https://spoonacular.com/productImages/190513-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 181544,
//        title: 'Ahold Hot Apple Cider K-Cup Packs - 12 CT',
//        image: 'https://spoonacular.com/productImages/181544-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 178548,
//        title: 'Ahold Vinegar Apple Cider',
//        image: 'https://spoonacular.com/productImages/178548-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 180223,
//        title: 'Ahold Premium Apple Cider',
//        image: 'https://spoonacular.com/productImages/180223-312x231.jpg',
//        imageType: 'jpg' },
//      { id: 213130,
//        title: 'Indian Summer Apple Cider Fresh UPC 41760 00500 - Not from Concentrate 100% Pasteurized',
//        image: 'https://spoonacular.com/productImages/213130-312x231.jpg',
//        imageType: 'jpg' } ]

