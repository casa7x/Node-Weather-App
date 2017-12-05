const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
    url: `https://api.darksky.net/forecast/YOUR_API_KEY/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        tempepature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback("unnable to connect");
    }
      
  });
}

module.exports.getWeather = getWeather;

