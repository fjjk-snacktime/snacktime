const FBSDK = require('react-native-fbsdk');
const {
  ShareDialog,
} = FBSDK;

// ...

// Build up a shareable link.
const shareLinkContent = {
  contentType: 'link',
  contentUrl: "https://facebook.com",
  contentDescription: 'Wow, check out this great site!',
};

// ...

// Share the link using the share dialog.
shareLinkWithShareDialog() {
  var tmp = this;
  ShareDialog.canShow(this.state.shareLinkContent).then(
    function(canShow) {
      if (canShow) {
        return ShareDialog.show(tmp.state.shareLinkContent);
      }
    }
  ).then(
    function(result) {
      if (result.isCancelled) {
        alert('Share cancelled');
      } else {
        alert('Share success with postId: '
          + result.postId);
      }
    },
    function(error) {
      alert('Share fail with error: ' + error);
    }
  );
}