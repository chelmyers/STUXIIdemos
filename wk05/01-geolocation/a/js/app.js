// HTML5 Geolocation
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation


$(document).ready(function(){


  if ("geolocation" in navigator) {
    console.log("Geolocation is available");

    navigator.geolocation.getCurrentPosition(success, error);

  } else {

  }


});


function success(lat, long) {
  $('.location').html(lat + " latitude and " + long + "longitude");
  console.log("Location displayed");
}

function error() {
  alert("There has been an error finding your location.");
}
