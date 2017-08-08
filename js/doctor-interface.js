// var nasaKey = require('./../.env').nasaApiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


// var listDoctors = function(resultData) {
//   // resultData.forEach(function(element)) {
//   //   $('#doctors').append("<li>" + element + "</li>");
//   // });
// };

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    $('#doctors').empty();
    console.log("we got here");
    var medicalIssue = $('#medical-issue').val();
    var doctorInfo = new Doctor();
    doctorInfo.getDoctors(medicalIssue, doctorInfo);

  });
});
