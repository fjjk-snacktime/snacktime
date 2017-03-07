import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;

export default facebookActions = {

    facebookAction: () => {
      return {
        type: 'IS_AUTHENTICATED',
        payload: AccessToken.getCurrentAccessToken()
        .then((data) => {
          console.log('facebook data change to became payload', data)
          return data
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
}
