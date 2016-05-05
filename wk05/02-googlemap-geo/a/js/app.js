//Google maps
//https://developers.google.com/maps/documentation/javascript/tutorial#HTML5
//https://developers.google.com/maps/documentation/javascript/examples/

//jQuery func to wait until page is loaded
$(document).ready(function(){

  //if geolocation is avaiable
  if ("geolocation" in navigator) {

    console.log("Geolocation is available");

    //Get coords. of user
    navigator.geolocation.getCurrentPosition(success, error);

  } else {

    //if geolocation is NOT available
    alert("Geolocation is not available or is disabled on this device.");
  }

});

//if coords. are successfully retrieved, this function runs
function success(pos) {
  //get the coords from position
  var c = pos.coords;
  //timestamp of when coords where retrieved
  var t = pos.timestamp;

  //creating a variable to hold lat & long of my liking
  var currentPos = new google.maps.LatLng(c.latitude, c.longitude);
  createMap(currentPos);

  console.log("Location displayed");
}

//if coords. are NOT retrieved, this function runs
function error() {
  alert("There has been an error finding your location.");
}

function createMap(city) {
  var mapOptions = {
    center: city,
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    // other options are here:
    // http://www.w3schools.com/googleAPI/ref_mapoptions.asp
  };

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

  var icon = 'a/i/icon.png';

  var marker = new google.maps.Marker({
    position: city,
    map: map,
    title: 'Mac Mart',
    animation: google.maps.Animation.DROP,
    icon: icon
  });
}








//
