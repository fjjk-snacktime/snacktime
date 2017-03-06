import {combineReducers} from "redux";

import app from './appReducers.ios.js';
import addIngredient from './addIngredientReducers.ios.js';

export default combineReducers({
  app,
  addIngredient,
})