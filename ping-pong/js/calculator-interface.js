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
