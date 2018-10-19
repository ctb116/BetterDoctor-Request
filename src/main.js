import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#doctor').click(function() {
    let healthIssue = $("#healthIssue").val();
    console.log(healthIssue);

    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${healthIssue}&location=wa-seattle&user_location=37.773%2C-122.413&skip=0&user_key=4773972df8c668e0d05ee58b36ec5d5b`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        for(let i=0; i < (response.data).length; i++) {
          let doctorFistName = (response.data[i].profile).first_name;
          let doctorLastName = (response.data[i].profile).last_name;
          console.log(doctorFistName);
          $('#showResults').append(`${doctorFistName} ${doctorLastName}`);
          console.log(response.data[i].profile);
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
