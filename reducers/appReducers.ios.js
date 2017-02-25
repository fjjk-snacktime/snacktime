export default function reducer ( state = {
  showSearchBar: false,
}, action) {
  switch (action.type) {
    case 'SHOW_SEARCH_BAR': {
      return Object.assign({}, state, {
        showSearchBar: !state.showSearchBar,
      })    
      // return {
      //   ...state,
      //   showSearchBar: true,
      // }
    }
  }
  return state;
}
