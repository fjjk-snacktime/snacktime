export default function facebookReducer (
  state = {
    isAuthenticated: false,
    payload: null
  }, action) {
  switch (action.type) {
    case 'IS_AUTHENTICATED': {
      console.log('this is the action payload call', action.payload)
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload
      }
    }
    case 'LOGIN_OUT': {
      console.log('this is the action payload for loginout', action.payload)
      return {
      ...state,
      isAuthenticated: false,
      payload: null
      }
    }
  }
  return state;
}
