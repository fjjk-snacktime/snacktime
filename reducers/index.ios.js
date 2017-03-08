import {combineReducers} from "redux";

import app from './appReducers.ios.js';
import addIngredient from './addIngredientReducers.ios.js';
import facebook from './facebookReducer.ios.js';

export default combineReducers({
  app,
  addIngredient,
  facebook
})


// import AddRecipe from './AddRecipe.ios.js';

//<AddRecipe info={this.props.recipe} ingredients={this.state.ingredients}/>
