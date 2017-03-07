export default function addIngredientReducer(state={
isAuthenticated: false}, action) {
  switch (action.type) {
    case 'IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: true,
      }
    }
  }
  
  return state;
}