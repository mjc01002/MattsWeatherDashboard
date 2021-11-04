var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function() {
  $(document).ready(function(){
    var date = moment().format("  (MM/DD/YYYY)");
    $("#currentDay").append(date);
    });

var city = cityInputEl.value.trim();
    if (city) {
      getCord(city);
      cityInputEl.value = "";
      $("#currentDay").append(city);

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

    var apiCall2 ="https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=1c91db0624deadc30a568dac3fdff159";
 
  fetch(apiCall2).then(function(response) {
  response.json().then(function(data){
    console.log(data);

    var tempEl = document.createElement("temp");
    var temp =" " + data.current.temp +"\xB0";
    tempEl.append(temp);
    document.getElementById("temp").append(tempEl);

    var windEl = document.createElement("wind");
    var wind =" " + data.current.wind_speed +"MPH";
    windEl.append(wind);
    document.getElementById("wind").append(windEl);

    var humidityEl = document.createElement("humidity");
    var humidity =" " + data.current.humidity +"%";
    humidityEl.append(humidity);
    document.getElementById("humidity").append(humidityEl);

    var uvEl = document.createElement("UV");
    var uv =" " + data.current.uvi;
    uvEl.append(uv);
    document.getElementById("UV").append(uvEl);

   //var gifImg = document.createElement('img');
    // gifImg.setAttribute('src', response.data[4].images.fixed_height.url);
    // responseContainerEl.appendChild(gifImg);
  
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








