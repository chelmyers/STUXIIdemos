//Google maps
//https://developers.google.com/maps/documentation/javascript/tutorial#HTML5
//https://developers.google.com/maps/documentation/javascript/examples/

function createMap(city) {
  var mapOptions = {
    center: city,
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    // other options are here:
    // http://www.w3schools.com/googleAPI/ref_mapoptions.asp
  };

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

}



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
  var myLatLong = new google.maps.LatLng(c.lat, c.long);
  createMap(myLatLong);

}

function error() {
  alert("There has been an error finding your location.");
}
