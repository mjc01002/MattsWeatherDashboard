var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function() {
var city = cityInputEl.value.trim();
    if (city) {
      getCord(city);
      cityInputEl.value = "";
    } else {
        alert("Please enter a city username");
      }
};

var getCord = function(city) {

var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1c91db0624deadc30a568dac3fdff159";

fetch(apiCall).then(function(response) {
  response.json().then(function(data){
    console.log(data);
    
    var latitude = data.coord.lat;
    var longitude = data.coord.lon;
    console.log(latitude)
    console.log(longitude)

    var apiCall2 ="https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,daily&appid=1c91db0624deadc30a568dac3fdff159";
 
  fetch(apiCall2).then(function(response) {
  response.json().then(function(data){
    console.log(data);
  
  })
})

});
});
};









//var latitude = city.coord.lat;
//var longitude = city.coord.lon; 
  


  
 // console.log(current);
 // console.log(city);
 
  //console.log();








