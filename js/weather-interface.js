
var apiKey = '22814b230f946fb50136c451e992a59f'

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
       $('.showWeather').text("The weather in " + city + " is " + response.weather[0].description);
     }).fail(function(error) {
       $('.showWeather').text(error.responseJSON.message);
     });
  });
});
