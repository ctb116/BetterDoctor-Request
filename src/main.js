import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


var ApplicationModule = require('./betterDoctorAPI.js').applicationModule;

$(document).ready(function() {

var applicationModule = new ApplicationModule();

  $('#doctor').click(function() {
    let healthIssue = $("#healthIssue").val();

    applicationModule.getData(healthIssue);

  });


  $('#findbyname').submit(function(event) {
    event.preventDefault();
    let DocFirst = $("#docName").val();
    let DocLast = $("#docLast").val();
    applicationModule.getName(DocFirst, DocLast);

  });
});
