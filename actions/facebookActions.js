import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;

export default facebookActions = {

    facebookAction: () => {
      return function(dispatch) {
        AccessToken.getCurrentAccessToken()
          .then((data) => {
            console.log('facebook data change to became payload', data)
            dispatch({type: 'IS_AUTHENTICATED', payload: data});
          })
          .catch((err) => {
            console.log('Error: ', err);
          })
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
