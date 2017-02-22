import axios from 'axios';
const helpers = {
  camera: {
    imageRecognition: (data) => {
      const URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAA14j-7sIJLDTRZd3bYpZrmCEoFA9IN40';

      const request = {
        "requests": 
        [
          {
            "features": 
            [
              {
                "type": "LABEL_DETECTION"
              }
            ],
            "image": 
            {
              "content": data
            }
          }
        ]
      }

      axios.post(URL, request)
        .then(resp => {
          let descriptions = [];
          for (let obj of resp.data.responses[0].labelAnnotations) {
            descriptions.push(obj.description);
          }
          return descriptions;
        })
        .catch(err => {
          console.log('Error: ', err)
        })
    }
  }
}


export default helpers;