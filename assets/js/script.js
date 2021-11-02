var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function() {
  // prevent page from refreshing

var city = cityInputEl.value.trim();

if (city) {
  getCord(city);

  // clear old content
  cityInputEl.value = "";
} else {
  alert("Please enter a city username");
}

};

var getCord = function(city) {

var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1c91db0624deadc30a568dac3fdff159";

fetch(apiCall)
.then(function(city) {
  
  return city.json();
})
.then(function(city) {
  var latitude = city.coord.lat;
  var longitude = city.coord.lon; 
  var apiCall2 ="https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,daily&appid=1c91db0624deadc30a568dac3fdff159";

  fetch(apiCall2)

  .then(function(current) {
  console.log(current);
    return response.json();
  })

  console.log(city);
  console.log(city.coord.lat);
  console.log(city.coord.lon);
  console.log();
})

}; 





