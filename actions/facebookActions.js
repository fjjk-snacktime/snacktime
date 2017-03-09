import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;

export default facebookActions = {

    checkAuthencitiy: () => {
      return {
        type: 'IS_AUTHENTICATED'
      }
    },

    getAccessToken: data => {
      return {
        type: 'GET_ACCESS_TOKEN',
        payload: data
      }
    },

    facebookLoginOut: () => {
      return function(dispatch) {
        dispatch({
          type: "LOGIN_OUT"
        })
      }
    }
}
