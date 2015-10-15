$(document).ready(function() {
var numberGiven = parseInt(prompt("What number would you like me to ping-pong to?"));

for (var index = 1; index <= numberGiven; index +=1) {
  if (index % 3 === 0 && index % 5 === 0) {
    $("#list").append("<li>" + "ping-pong" + "</li>");
  }
  else if (index % 3 === 0) {
    $("#list").append("<li>" + "ping" + "</li>");
  }
  else if (index % 5 === 0) {
    $("#list").append("<li>" + "pong" + "</li>");
  }
  else
    $("#list").append("<li>" + index + "</li>");
}
});
