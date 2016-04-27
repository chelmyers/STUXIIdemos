// HTML5 Geolocation
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation

//openweathermap
//http://openweathermap.org/current#geo


$(document).ready(function(){
  console.log(2);

  if ("geolocation" in navigator) {
    console.log("Geolocation is available");
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not available or is disabled on this device.");
  }
});


function success(position) {
  var c = position.coords;
  var t = position.timestamp;
  console.log("Location successfully retrieved");

  var url = "//api.openweathermap.org/data/2.5/weather?lat=" + c.latitude + "&lon=" + c.longitude + "&APPID=dfc12af78c0d3f30f389d0cc934567db";

  //Pretty Print JSON
  //http://jsonprettyprint.com/json-pretty-printer.php

  $.getJSON(url,function(data){
          console.log(JSON.stringify(data));
          console.log(data.weather[0].description);
          console.log(data.name);
          $('.weather').html(data.weather[0].description);
          $('.city').html(data.name);
  });
}

function error() {
  alert("There has been an error finding your location.");
}
