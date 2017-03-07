import {combineReducers} from "redux";

import app from './appReducers.ios.js';
import addIngredient from './addIngredientReducers.ios.js';
import facebook from './facebookReducer.js';

export default combineReducers({
  app,
  addIngredient,
  facebook,
})