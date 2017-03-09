# Snacktime
A native iOS app that allows you to take pictures of, or search for, food and ingredients and receive back recommendations of food/ingredients <strong>that pair well</strong> as well as recipes that combine everything together!

![alt tag](./public/welcomePage.png)

### Compare Nutritional Values!

![alt tag](./public/compareNutritionalValuesPage.png)

### Find recipes from chosen ingredients

![alt tag](./public/Recipes.png)

### In depth description of recipes

![alt tag](./public/Recipe.png)

### Getting Started
To get started, simply clone or fork and clone the repo and follow the brief instructions here to setup the necessary Xcode compiler: https://developers.facebook.com/docs/ios/getting-started

#### You will also need an API key for each of the following:

1. https://cloud.google.com/vision/
2. <a href="developer.foodpairing.com">developer.foodpairing.com</a>
3. https://market.mashape.com/spoonacular/recipe-food-nutrition/pricing

#### Once secured, plug in your keys to server/controllers/apiKeysExample.js (replace each 'key here' with the corresponding key, keeping the single quotes), change the file name to just apiKeys.js, and save the file.

Next open your terminal (you'll need two windows or tabs), navigate to the project folder, and type in the following scripts:

```javascript
npm install && react-native link
```

Then:
```javascript
npm run nodemon
```

And in one addition terminal/tab run:
```javascript
react-native run-ios
```

And enjoy!
