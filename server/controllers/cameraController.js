module.exports = {
  imageRecognition: (req, res, next) => {
    const URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAA14j-7sIJLDTRZd3bYpZrmCEoFA9IN40';
      let data = JSON.parse(req.body.data);
      console.log(data);
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
        .then( data => {
          let descriptions = [];
          for (let obj of resp.data.responses[0].labelAnnotations) {
            descriptions.push(obj.description);
          }
          console.log(descriptions);
          res.json(descriptions);
        })
        .catch(err => {
        console.log('Error: ', err)
      })
  }
}
