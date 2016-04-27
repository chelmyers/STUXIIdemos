// HTML5 Geolocation
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation

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
  $('.location').html(c.latitude + " latitude and " + c.longitude + " longitude");
  console.log("Location displayed");
}

function error() {
  alert("There has been an error finding your location.");
}
