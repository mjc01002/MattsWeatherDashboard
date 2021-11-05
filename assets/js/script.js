var recentCities=[];

var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function() {
  $(document).ready(function(){
    var date = moment().format("  (MM/DD/YYYY)");
    $("#currentDay").append(date);

    //document.getElementById("currentDay").innerHTML = "";
    document.getElementById("temp").innerHTML = "Temp:";
    document.getElementById("wind").innerHTML = "Wind:";
    document.getElementById("humidity").innerHTML = "Humidity:";
    document.getElementById("UV").innerHTML = "UV Index:";

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

    // Current Forecast
    var tempEl = document.createElement("temp");
    var temp =" " + data.current.temp +"\xB0" +"F";
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

    //Five Day Forecast Section

    for (i=1; i<6; i++) {
    var y = ("date" + i);

    var dateEl = document.createElement(y);
    var date1 = data.daily[i].dt *1000;
    var dateObject = new Date(date1);
    var dateFormat = dateObject.toLocaleDateString("en-US");
    dateEl.append(dateFormat);
    document.getElementById(y).append(dateEl);
    
    var w = ("icon" + i);
    var img = document.createElement(w); 
    //var iconEl = document.createElement(w);
    var icon = data.daily[i].weather[0].icon;
    img.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
    img.append(img.src);
    document.getElementById(w).append(img);
    
     
    
 
    
    var u = ("temp" + i);
    var temp1El = document.createElement(u);
    var temp1 =" " + data.daily[i].temp.day +"\xB0" +"F";
    temp1El.append(temp1);
    document.getElementById(u).append(temp1El);

    var v = ("wind" + i);
    var wind1El = document.createElement(v);
    var wind1 =" " + data.daily[i].wind_speed +" MPH";
    wind1El.append(wind1);
    document.getElementById(v).append(wind1El);

    var t = ("humidity" + i);
    var humidity1El = document.createElement(t);
    var humidity1 =" " + data.daily[i].humidity +" %";
    humidity1El.append(humidity1);
    document.getElementById(t).append(humidity1El);

    }
  })
})

});
});
 
      var button = document.createElement("button");
      button.innerHTML = city;
      button.className = "recentBtn";
      button.onclick = function(){
        getCord(city);
      };
      document.getElementById("recentButtons").append(button);

      //localStorage.setItem("function", getCord());
      recentCities.push(city);
      localStorage.setItem("city", JSON.stringify(recentCities));
      
};

//Retrieve recent cities from local storage and create buttons
   var retrievedCities = localStorage.getItem("city");
  recentCities = JSON.parse(retrievedCities);

  for(i=0; i < recentCities[i].length; i ++) {

  var button = document.createElement("button");
  button.innerHTML = recentCities[i];
  button.className = "btn";
  button.onclick = function(){
    getCord(recentCities[i]);
  };

  document.getElementById("recentButtons").append(button);
  }




console.log(recentCities);











