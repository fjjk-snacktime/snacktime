export default function facebookReducer (
  state = {
    isAuthenticated: false,
    payload: null
  }, action) {
  switch (action.type) {
    case 'IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload
      }
    }
  }
  return state;
}
