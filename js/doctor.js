var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.doctorsList = function(dataLength, resultsData) {
  var output = [];
  for (var i = 0; i < dataLength; i++) {
    output.push(resultsData[i]);
    console.log("results data:" + output[i]);
  }
  return output;
};

Doctor.prototype.getDoctors = function(medicalIssue, doctorInfo) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
      console.log(results);
      console.log(results.data[0]);
      console.log(results.data.length);
      console.log(results.meta);
      var doctorNames = doctorInfo.doctorsList(results.data.length, results.data);
      doctorNames.forEach(function(name) {
        $('#doctors').append('<li>' + name.profile.first_name + ' ' + name.profile.last_name + '</li>');
        console.log(name.profile.first_name + ' ' + name.profile.last_name);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};


exports.doctorModule = Doctor;
