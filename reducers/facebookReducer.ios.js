export default function facebookReducer (
  state = {
    isAuthenticated: false,
    id: null
  }, action) {
  switch (action.type) {
    case 'IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: true,
      }
    }
    case 'GET_ACCESS_TOKEN': {
      return {
        ...state,
        id: action.payload
      }
    }
    case 'LOGIN_OUT': {
      console.log('this is the action payload for loginout', action.payload)
      return {
      ...state,
      isAuthenticated: false,
      id: null
      }
    }
  }
  return state;
}
