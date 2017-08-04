//var nasaKey = require('./../.env').nasaApiKey;
var apiKey = require('./../.env').apiKey;

// function Nasa(){
// }
//
// Nasa.prototype.getImage = function(passedNasaFunction){
//
//   $.getJSON('https://api.nasa.gov/planetary/apod?api_key=' + nasaKey)
//     .then(function(apiResponse){
//       console.log(apiResponse);
//       passedNasaFunction(apiResponse.explanation, apiResponse.hdurl);
//       //passedNasaFunction(apiResponse.hdurl);
//     });
// };
//
// module.exports = Nasa;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
      console.log(results);
      console.log(results.data);
      console.log(results.meta);
      var doctorNames = results.data;
      doctorNames.forEach(function(name) {
        $('#doctors').append('<li>' + name.item_type + '</li>');
        console.log(name.item_type);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
