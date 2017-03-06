const initialState = {
  rendering: false,
  showSearch: false
}

export default function addIngredientReducer(state=initialState, action) {
  switch (action.type) {
    case 'SHOW_SEARCH': {
      return {
        ...state,
        showSearch: !state.showSearch,
      }
    }
    case 'RENDERING': {
      return {
        ...state,
        rendering: !state.rendering,
      }
    }
  }
  
  return state;
}