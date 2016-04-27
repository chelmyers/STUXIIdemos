// HTML5 Geolocation
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation

//openweathermap
//http://openweathermap.org/current#geo

$(document).ready(function(){
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
  // $('.location').html(c.latitude + " latitude and " + c.longitude + " longitude");
  console.log("Location displayed");

  $.getJSON("http:api.openweathermap.org/data/2.5/weather?lat=" + c.latitude + "&lon=" + c.longitude,function(json){
      console.log(JSON.stringify(json));
      console.log("weather displayed");
  });

}

function error() {
  alert("There has been an error finding your location.");
}
