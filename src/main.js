import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#doctor').click(function() {
    let healthIssue = $("#healthIssue").val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${healthIssue}&location=wa-seattle&user_location=37.773%2C-122.413&skip=0&user_key=${process.env.exports.apiKey}`).then(function(response)
      {
        if (response.meta.count === 0) {
          $('.errors').text("Your search did not return any results");
        } else
        console.log(response);
        for(let i=0; i < (response.data).length; i++) {
          let doctorFistName = (response.data[i].profile).first_name;
          let doctorLastName = (response.data[i].profile).last_name;

          // $('#showResults').append(`<div class="panel panel-default">${doctorFistName} ${doctorLastName}</br>`)

          for(let a=0; a < ((response.data[i]).practices).length; a++) {
            let doctorLocationName = ((response.data[i]).practices[a]).name;
            let doctorWebsite = ((response.data[i]).practices[a]).website;
            let doctorAddress = ((response.data[i]).practices[a]).visit_address;
            let doctorCity = doctorAddress.city;
            let doctorState = doctorAddress.state_long;
            let doctorStreet = doctorAddress.street;
            let doctorZip = doctorAddress.zip;
            let acceptsNew = ((response.data[i]).practices[a]).accepts_new_patients;

            for(let e=0; e < (((response.data[i]).practices[a]).phones).length; e++ ) {
              let doctorNumber = (((response.data[i]).practices[a]).phones[e]).number;
              let doctorNumberType = (((response.data[i]).practices[a]).phones[e]).type;

            $('#showResults').append(`<div class="panel panel-default">
                                      ${doctorFistName} ${doctorLastName}</br>
                                      ${doctorLocationName}<br>
                                      Address: ${doctorStreet}<br>
                                      ${doctorCity}, ${doctorState} ${doctorZip}</br>
                                      Number: ${doctorNumber} Type: ${doctorNumberType}</br>
                                      Website: ${doctorWebsite}</br>
                                      Accepts new patients? ${acceptsNew}
                                      </div></br></br>`);
              $('.errors').text("");
            }
          }
        }
      }).fail(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });


  $('#findbyname').submit(function(event) {
    event.preventDefault();
    let DocFirst = $("#docName").val();
    let DocLast = $("#docLast").val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${DocFirst}&last_name=${DocLast}&location=wa-seattle&user_location=37.773%2C-122.413&skip=0&user_key=${process.env.exports.apiKey}`).then(function(response)
      {
        for(let i=0; i < (response.data).length; i++) {
          let doctorFistName = (response.data[i].profile).first_name;
          let doctorLastName = (response.data[i].profile).last_name;

          // $('#showResults').append(`<div class="panel panel-default">${doctorFistName} ${doctorLastName}</br>`)

          for(let a=0; a < ((response.data[i]).practices).length; a++) {
            let doctorLocationName = ((response.data[i]).practices[a]).name;
            let doctorWebsite = ((response.data[i]).practices[a]).website;
            let doctorAddress = ((response.data[i]).practices[a]).visit_address;
            let doctorCity = doctorAddress.city;
            let doctorState = doctorAddress.state_long;
            let doctorStreet = doctorAddress.street;
            let doctorZip = doctorAddress.zip;
            let acceptsNew = ((response.data[i]).practices[a]).accepts_new_patients;

            for(let e=0; e < (((response.data[i]).practices[a]).phones).length; e++ ) {
              let doctorNumber = (((response.data[i]).practices[a]).phones[e]).number;
              let doctorNumberType = (((response.data[i]).practices[a]).phones[e]).type;

            $('#showResults').append(`<div class="panel panel-default">
                                      ${doctorFistName} ${doctorLastName}</br>
                                      ${doctorLocationName}<br>
                                      Address: ${doctorStreet}<br>
                                      ${doctorCity}, ${doctorState} ${doctorZip}</br>
                                      Number: ${doctorNumber} Type: ${doctorNumberType}</br>
                                      Website: ${doctorWebsite}</br>
                                      Accepts new patients? ${acceptsNew}
                                      </div></br></br>`);
            $('.errors').text("");
            }
          }
        }
      }).fail(function(error) {
        $('#errors').text(`There was an error processing your request: ${error.responseText} Please try again.`);
      });
    });
  });
