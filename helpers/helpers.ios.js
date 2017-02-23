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

      return axios.post(URL, request)
    }
  },
  foodpairing: {
    getFoodID: (data) => {
      const options = {
        headers: {
          'X-Application-ID': 'b5378ca6',
          'X-Application-Key': '690be2968f8f08b26fcc1f2c9c8f5b90'
        }
      }
      return axios.get(`https://api.foodpairing.com/ingredients?q=${data}`, options)
      // /ingredients/{id}/pairings?order=matches[all][rel]
    },
    getFoodpairings: (id) => {
      const options = {
        headers: {
          'X-Application-ID': 'b5378ca6',
          'X-Application-Key': '690be2968f8f08b26fcc1f2c9c8f5b90'
        }
      }
      return axios.get(`https://api.foodpairing.com/ingredients/${id}/pairings`, options)
    }
  }
}
export default helpers;
