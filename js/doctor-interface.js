// var nasaKey = require('./../.env').nasaApiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


var medicalIssue = function(resultData) {
  $('.nasa-explanation').text("This is a test " + nasaData1);
  $('.nasa-image').append('<img id="nasa-img" src="' + nasaData2 + '">');
};

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    console.log("we got here");
    var medicalIssue = $('#medical-issue').val();
    var doctorInfo = new Doctor();
    doctorInfo.getDoctors(medicalIssue);
  });
});
