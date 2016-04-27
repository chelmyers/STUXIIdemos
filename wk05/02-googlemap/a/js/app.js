$(document).ready(function(){
  console.log(1);
  if ("geolocation" in navigator) {
    console.log("Geolocation is available");
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not available or is disabled on this device.");
  }
});


function success(position) {
  var c = position.coords;
  var myLatLong = new google.maps.LatLng(c.latitude, c.longitude);
  createMap(myLatLong);
}

function error() {
  alert("There has been an error finding your location.");
}

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
