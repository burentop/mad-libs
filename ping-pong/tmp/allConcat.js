var Calculator = require("./../js/pingpong.js").calculatorModule;

$(document).ready(function() {
  $('#calc-form').submit(function(event) {
    event.preventDefault();
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    var op = $("#op").val();
    var simpleCalculator = new Calculator("blue");
    var result = simpleCalculator.calculate(num1, num2, op);
    $("#num1").val("");
    $("#num2").val("");
    $("#solution").prepend("<p>" + num1 + " " + op + " " + num2 + " = " + result + "</p>");
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
