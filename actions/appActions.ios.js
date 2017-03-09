export default appAction = {

  showSearchBar: () => {
    console.log('in action');
    return {
      type: 'SHOW_SEARCH_BAR'
    }
  },

  rendering: ()=> {
    return {
      type: 'RENDERING'
    }
  },

  laggedOut: () => {
    return {
      type: 'LAG_OUT'
    }
  },

}
